import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList';
import TodoFull from './containers/TodoFull';
import Tabs from './components/Tabs';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Router>
      <div>
        <Switch>
          <Route
            path="/note-:id"
            render={({ match }) => (
              <TodoFull id={match.params.id} />
            )}
          />
          <Route
            path="/:filter?"
            render={({ match }) => (
              <TodoList filter={match.params.filter} />
            )}
          />
        </Switch>
        <Tabs />
      </div>
    </Router>
  </div>
);

export default App;
