import * as React from 'react';
import TodoListItem from '@src/components/TodoListItem';
import styled from 'styled-components';
import { Todo } from '@src/types';

export interface Props {
  todos: Todo[];
  onClickTodo: (todo: Todo) => void;
  onClickDeleteTodo: (todo: Todo) => void;
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoList = ({ todos, onClickTodo, onClickDeleteTodo }: Props) => (
  <Container>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onClick={onClickTodo}
        onClickDelete={onClickDeleteTodo}
      />
    ))}
  </Container>
);

export default TodoList;
