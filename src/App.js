import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Tabs from './components/Tabs';

const App = (props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Router>
      <div>
        <TodoForm />
        <Route
          path="/:filter?"
          render={({ match }) => (
            <TodoList filter={match.params.filter} />
          )}
        ></Route>
        <Tabs />
      </div>
    </Router>
  </div>
);

export default App;
