import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose, withHandlers, setPropTypes } from 'recompose';

import TodoItemLi from '../components/TodoItemLi';
import DeleteButton from '../components/DeleteButton';

import { toggleTodo, deleteTodo } from '../actions/todo';

const mapStateToProps = null;
const mapDispatchToProps = { toggleTodo, deleteTodo };

const propTypes = {
  id: PropTypes.number,
  isCompleted: PropTypes.bool,
  name: PropTypes.string,
  deleteTodo: PropTypes.func,
  completedHandler: PropTypes.func,
};

const handlers = {
  completedHandler: (props) => () => {
    const { id, toggleTodo } = props;
    toggleTodo(id);
  },
};

const enhance = compose(
  setPropTypes(propTypes),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
);

const TodoItem = enhance(({ id, isCompleted, name, deleteTodo, completedHandler }) => (
  <TodoItemLi isCompleted={isCompleted}>
    <input type="checkbox" defaultChecked={isCompleted} onChange={completedHandler} />
    <span>
      <Link to={`/note-${id}`}>{name}</Link>
    </span>
    <DeleteButton onClick={() => deleteTodo(id)}>delete note</DeleteButton>
  </TodoItemLi>
));

export default TodoItem;
