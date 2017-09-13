import styled from 'styled-components';

const TodoItemLi = styled.li`
  display: flex;
  margin-bottom: 10px;
  span {
    flex-grow: 1;
    text-decoration: ${(props) => props.isCompleted ? 'line-through' : 'none'}
  }
`;

export default TodoItemLi;
