import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { currentUpdate, saveTodo } from '../reducers/todo';

const Form = styled.form`
  width: 200px;
  margin: 30px auto;
  input {
    width: 100%;
    height: 30px;
  }
`;

class TodoForm extends PureComponent {
  handlerInputChange = (e) => {
    const { currentUpdate } = this.props;
    const inputValue = e.target.value;
    currentUpdate(inputValue);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  }
  render() {
    const { currentTodo } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handlerInputChange}
          value={currentTodo}
        />
      </Form>
    );
  }
}

export default connect(
  (state) => ({ currentTodo: state.currentTodo }),
  { currentUpdate, saveTodo }
)(TodoForm);
