import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import TodoItem from './TodoItem';
import { fetchTodos, updateCompleted, getActiveTodos } from '../reducers/todo';

const UL = styled.ul`
  list-style: none;
  padding: 0;
  width: 400px;
  text-align: left;
  margin: 0 auto;
  margin-top: 30px;
`;

class TodoList extends PureComponent {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div>
        <UL>
          {this.props.todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </UL>
      </div>
    );
  }
}


export default connect(
  (state, ownProperty) => ({ todos: getActiveTodos(state.todos, ownProperty.filter) }),
  { fetchTodos, updateCompleted }
)(TodoList);
