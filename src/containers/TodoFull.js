import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getClickedTodo } from '../actions/todo';

const enhance = compose(
  connect(
    (state, ownProperty) => ({ todo: getClickedTodo(state.todos, ownProperty.id) })
  )
);

const TodoFull = enhance((props) => (
  <div>
    <p>{props.todo.name}</p>
    <p>{props.todo.text}</p>
  </div>
));

export default TodoFull;
