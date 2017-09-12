import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { toggleTodo, deleteTodo } from '../reducers/todo';

const DeleteButton = styled.button`
  box-shadow: none;
  background-color: transparent;
  border: 2px solid #ccc;
`;

const TodoItemLi = styled.li`
  display: flex;
  margin-bottom: 10px;
  span {
    flex-grow: 1;
    text-decoration: ${(props) => props.isCompleted ? 'line-through' : 'none'}
  }
`;

class TodoItem extends PureComponent {
  completedHandler = () => {
    const { id, toggleTodo } = this.props;
    toggleTodo(id);
  }
  render() {
    const { id, isCompleted, name } = this.props;
    return (
      <TodoItemLi isCompleted={isCompleted}>
        <input type="checkbox" defaultChecked={isCompleted} onChange={this.completedHandler} />
        <span>{name}</span>
        <DeleteButton onClick={() => this.props.deleteTodo(id)}>delete note</DeleteButton>
      </TodoItemLi>
    );
  }
}

export default connect(
  () => ({}),
  { toggleTodo, deleteTodo }
)(TodoItem);
