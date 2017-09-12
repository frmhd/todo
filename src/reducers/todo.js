import { getTodos, createTodo, updateTodo, destroyTodo } from '../lib/todoServices';
import {
  TODO_ADD,
  TODOS_LOAD,
  CURRENT_UPDATE,
  UPDATE_COMPLETED,
  REMOVE_TODO,
} from '../constants';

const initialState = {
  todos: [],
  currentTodo: '',
};

export const currentUpdate = (val) => ({ type: CURRENT_UPDATE, payload: val });
export const loadTodos = (todos) => ({ type: TODOS_LOAD, payload: todos });
export const addTodo = (todo) => ({ type: TODO_ADD, payload: todo });
export const updateCompleted = (todo) => ({ type: UPDATE_COMPLETED, payload: todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

export const fetchTodos = () => (dispatch) => {
  getTodos()
    .then((todos) => dispatch(loadTodos(todos)));
};

export const saveTodo = (name) => (dispatch) => {
  createTodo(name)
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

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, currentTodo: '', todos: state.todos.concat(action.payload) };
    case TODOS_LOAD:
      return { ...state, todos: action.payload };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case UPDATE_COMPLETED:
      return { ...state, todos: state.todos.map((t) => t.id === action.payload.id ? action.payload : t) };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter((t) => t.id !== action.payload) };
    default:
      return state;
  }
};
