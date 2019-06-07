import * as React from 'react';
import { memo } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Todo } from '@src/types';

export interface Props {
  todo: Todo;
  onClick: (todo: Todo) => void;
  onClickDelete: (todo: Todo) => void;
}

const Container = styled.li<{ completed: boolean }>`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  margin-bottom: 8px;
  width: 500px;
  display: flex;
`;

const TodoName = styled(Link)`
  flex-grow: 1;
  text-align: left;
`;

const Control = styled.span`
  cursor: pointer;
  margin-left: 16px;
`;

const TodoListItem = ({ todo, onClick, onClickDelete }: Props) => {
  const handleOnClick = (_: React.SyntheticEvent<HTMLSpanElement>) => {
    onClick(todo);
  };

  const handleOnClickDelete = (_: React.SyntheticEvent<HTMLSpanElement>) => {
    onClickDelete(todo);
  };

  return (
    <Container completed={todo.completed}>
      <TodoName to={`/todos/${todo.id}/`}>{todo.text}</TodoName>
      <Control onClick={handleOnClick}>
        {todo.completed ? `未了に戻す` : `完了にする`}
      </Control>
      <Control onClick={handleOnClickDelete}>削除する</Control>
    </Container>
  );
};

export default memo(
  TodoListItem,
  (prevProps: Props, nextProps: Props) =>
    prevProps.todo.updatedAt === nextProps.todo.updatedAt
);
