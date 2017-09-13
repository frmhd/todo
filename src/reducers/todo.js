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
  currentTodoText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, currentTodo: '', currentTodoText: '', todos: state.todos.concat(action.payload) };
    case TODOS_LOAD:
      return { ...state, todos: action.payload };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload.name, currentTodoText: action.payload.text };
    case UPDATE_COMPLETED:
      return { ...state, todos: state.todos.map((t) => t.id === action.payload.id ? action.payload : t) };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter((t) => t.id !== action.payload) };
    default:
      return state;
  }
};
