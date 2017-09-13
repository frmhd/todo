import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Label from '../components/Label';

import { getClickedTodo, fetchTodos } from '../actions/todo';

const enhance = compose(
  connect(
    (state, ownProperty) => ({ todo: getClickedTodo(state.todos, ownProperty.id) }),
    { fetchTodos }
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchTodos();
    },
  }),
);

const Loader = () => (<span>Loading...</span>);

const TodoFull = enhance(({ todo }) => (
  <div>
    {todo ?
      <div>
        <Label>Title</Label>
        <p>{todo.name}</p>
        <Label>Text</Label>
        <p>{todo.text}</p>
      </div>
      : <Loader /> }
  </div>
));

export default TodoFull;
