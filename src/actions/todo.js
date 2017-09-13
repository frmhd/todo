import { getTodos, createTodo, updateTodo, destroyTodo } from '../lib/todoServices';
import {
  TODO_ADD,
  TODOS_LOAD,
  CURRENT_UPDATE,
  UPDATE_COMPLETED,
  REMOVE_TODO,
} from '../constants';

export const currentUpdate = (name, text) => ({ type: CURRENT_UPDATE, payload: { name, text } });
export const loadTodos = (todos) => ({ type: TODOS_LOAD, payload: todos });
export const addTodo = (todo) => ({ type: TODO_ADD, payload: todo });
export const updateCompleted = (todo) => ({ type: UPDATE_COMPLETED, payload: todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

export const fetchTodos = () => (dispatch) => {
  getTodos()
    .then((todos) => dispatch(loadTodos(todos)));
};

export const saveTodo = (name, text) => (dispatch) => {
  createTodo(name, text)
    .then((res) => dispatch(addTodo(res)));
};

export const toggleTodo = (id) => (dispatch, getState) => {
  const todos = getState().todos;
  const todo = todos.find((t) => t.id === id);
  const toggled = { ...todo, isCompleted: !todo.isCompleted };
  updateTodo(toggled).then((res) => dispatch(updateCompleted(res)));
};

export const deleteTodo = (id) => (dispatch) => {
  destroyTodo(id).then(() => dispatch(removeTodo(id)));
};

export const getActiveTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter((t) => !t.isCompleted);
    case 'completed':
      return todos.filter((t) => t.isCompleted);
    default:
      return todos;
  }
};

export const getClickedTodo = (todos, id) => (
  todos.find((todo) => todo.id === parseInt(id, 10))
);
