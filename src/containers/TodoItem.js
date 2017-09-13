import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

import TodoItemLi from '../components/TodoItemLi';
import DeleteButton from '../components/DeleteButton';

import { toggleTodo, deleteTodo } from '../actions/todo';

const enhance = compose(
  connect(null, { toggleTodo, deleteTodo }),
  withHandlers({
    completedHandler: (props) => () => {
      const { id, toggleTodo } = props;
      toggleTodo(id);
    },
  })
);

const TodoItem = enhance(({ id, isCompleted, name, deleteTodo }) => (
  <TodoItemLi isCompleted={isCompleted}>
    <input type="checkbox" defaultChecked={isCompleted} onChange={this.completedHandler} />
    <span>
      <Link to={`/note-${id}`}>{name}</Link>
    </span>
    <DeleteButton onClick={() => deleteTodo(id)}>delete note</DeleteButton>
  </TodoItemLi>
));

export default TodoItem;
