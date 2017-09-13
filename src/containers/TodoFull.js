import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle, setPropTypes } from 'recompose';

import Label from '../components/Label';

import { getClickedTodo, fetchTodos } from '../actions/todo';

const mapStateToProps = (state, ownProperty) => ({ todo: getClickedTodo(state.todos, ownProperty.id) });
const mapDispatchToProps = { fetchTodos };

const propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};

const enhance = compose(
  setPropTypes(propTypes),
  connect(mapStateToProps, mapDispatchToProps),
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
