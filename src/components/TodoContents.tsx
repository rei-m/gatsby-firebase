import * as React from 'react';
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { User, VisibilityFilter, SHOW_ALL, Todo } from '@src/types';
import {
  addTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from '@src/actions';
import { useFirestoreTodos } from '@src/hooks/useFirestoreTodos';

export interface Props {
  user: User;
}

const TodoContents = ({ user }: Props) => {
  const [filter, setFilter] = useState<VisibilityFilter>(SHOW_ALL);
  const todos = useFirestoreTodos(user.uid, filter);

  const handleAddTodoSubmit = async (todoName: string) => {
    await addTodoAction(user.uid, todoName);
  };

  const handleClickTodo = async (todo: Todo) => {
    await updateTodoAction(user.uid, todo.id, !todo.completed);
  };

  const handleClickDeleteTodo = async (todo: Todo) => {
    await deleteTodoAction(user.uid, todo.id);
  };

  return (
    <section>
      {todos ? (
        <>
          <AddTodoForm onSubmit={handleAddTodoSubmit} />
          <TodoList
            todos={todos}
            onClickTodo={handleClickTodo}
            onClickDeleteTodo={handleClickDeleteTodo}
          />
          <TodoFilter currentFilter={filter} onClick={setFilter} />
        </>
      ) : (
        <div>ろーでいんぐ</div>
      )}
    </section>
  );
};

export default TodoContents;
