import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getClickedTodo } from '../actions/todo';

const enhance = compose(
  connect(
    (state, ownProperty) => ({ todo: getClickedTodo(state.todos, ownProperty.id) })
  )
);

const TodoFull = enhance(({ todo }) => (
  <div>
    {console.log(todo)}
    <p>title</p>
    <p>{todo.name}</p>
    <p>text</p>
    <p>{todo.text}</p>
  </div>
));

export default TodoFull;
