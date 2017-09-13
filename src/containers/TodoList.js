import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Route, Switch } from 'react-router-dom';

import TodoItem from '../containers/TodoItem';
import Ul from '../components/Ul';
import TodoFull from '../containers/TodoFull';
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
  })
);

const TodoList = enhance((props) => (
  <div>
    <Switch>
      <Route
        exact
        path="/note-:id"
        render={({ match }) => (
          <TodoFull id={match.params.id} />
        )}
      />
      <Ul>
        {props.todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </Ul>
    </Switch>
  </div>
));

export default (TodoList);
