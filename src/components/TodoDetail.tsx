import * as React from 'react';
import Loading from '@src/components/Loading';
import { useFirestoreTodo } from '@src/hooks/useFirestoreTodo';

export interface Props {
  uid: string;
  todoId: string;
}

const TodoDetail = ({ uid, todoId }: Props) => {
  const todo = useFirestoreTodo(uid, todoId);

  if (todo === undefined) {
    return <Loading />;
  }

  if (todo === null) {
    return <div>見つからないよ</div>;
  }

  return (
    <article>
      <div>{`id: ${todo.id}`}</div>
      <div>{`text: ${todo.text}`}</div>
      <div>{`completed: ${todo.completed}`}</div>
      <div>{`createdAt: ${
        todo.createdAt ? new Date(todo.createdAt).toLocaleString() : ''
      }`}</div>
      <div>{`updatedAt: ${
        todo.updatedAt ? new Date(todo.updatedAt).toLocaleString() : ''
      }`}</div>
    </article>
  );
};

export default TodoDetail;
