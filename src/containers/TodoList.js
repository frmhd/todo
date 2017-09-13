import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import TodoItem from '../containers/TodoItem';
import TodoForm from '../containers/TodoForm';
import Ul from '../components/Ul';
import { fetchTodos, updateCompleted, getActiveTodos } from '../actions/todo';

const enhance = compose(
  connect(
    (state, ownProperty) => ({ todos: getActiveTodos(state.todos, ownProperty.filter) }),
    { fetchTodos, updateCompleted }
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchTodos();
    },
  }),
);

const TodoList = enhance((props) => (
  <div>
    <TodoForm />
    <Ul>
      {props.todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </Ul>
  </div>
));

export default (TodoList);
