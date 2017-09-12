export const getTodos = () => fetch('http://localhost:8080/todos')
  .then((res) => res.json());

export const getActiveTodos = () => fetch('http://localhost:8080/todos')
  .then((res) => res.json());

export const createTodo = (name) => fetch('http://localhost:8080/todos', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, isCompleted: false }),
})
  .then((res) => res.json());

export const updateTodo = (todo) => fetch(`http://localhost:8080/todos/${todo.id}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(todo),
})
  .then((res) => res.json());

export const destroyTodo = (id) => fetch(`http://localhost:8080/todos/${id}`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json());
