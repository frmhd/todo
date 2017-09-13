import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle, setPropTypes } from 'recompose';

import TodoItem from '../containers/TodoItem';
import TodoForm from '../containers/TodoForm';
import Ul from '../components/Ul';
import { fetchTodos, updateCompleted, getActiveTodos } from '../actions/todo';

const mapStateToProps = (state, ownProperty) => ({ todos: getActiveTodos(state.todos, ownProperty.filter) });
const mapDispatchToProps = { fetchTodos, updateCompleted };

const propTypes = {
  todos: PropTypes.string,
};

const cycle = {
  componentDidMount() {
    this.props.fetchTodos();
  },
};

const enhance = compose(
  setPropTypes(propTypes),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(cycle),
);

const TodoList = enhance(({ todos }) => (
  <div>
    <TodoForm />
    <Ul>
      {todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </Ul>
  </div>
));

export default (TodoList);
