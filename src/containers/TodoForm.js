import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import Form from '../components/Form';
import { currentUpdate, saveTodo } from '../actions/todo';

const enhance = compose(
  connect(
    (state) => ({
      currentTodo: state.currentTodo,
      currentTodoText: state.currentTodoText,
    }),
    { currentUpdate, saveTodo }
  ),
  withHandlers({
    handlerInputChange: (props) => (e) => {
      const inputValue = e.target.value;
      props.currentUpdate(inputValue, props.currentTodoText);
    },
    handlerTextareaChange: (props) => (e) => {
      const textareaValue = e.target.value;
      props.currentUpdate(props.currentTodo, textareaValue);
    },
    handlerEnterKey: (props) => (e) => {
      if (e.charCode === 13 && props.currentTodo) {
        e.preventDefault();
        props.saveTodo(props.currentTodo, props.currentTodoText);
      }
    },
    handleSubmit: (props) => (e) => {
      e.preventDefault();
      props.saveTodo(props.currentTodo, props.currentTodoText);
    },
  })
);

const TodoForm = enhance(({
  currentTodo,
  currentTodoText,
  handleSubmit,
  handlerInputChange,
  handlerTextareaChange,
  handlerEnterKey,
}) => (
  <Form onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={handlerInputChange}
      value={currentTodo}
      placeholder="Title"
    />
    <textarea
      onChange={handlerTextareaChange}
      onKeyPress={handlerEnterKey}
      value={currentTodoText}
      cols="30"
      rows="3"
      placeholder="Your note"
    ></textarea>
  </Form>
));

export default TodoForm;
