import { useState, useEffect } from 'react';
import { todosCollection, toModel } from '@src/infrastructure/firestore';
import { Todo } from '@src/types';

export const useFirestoreTodo = (uid: string, todoId: string) => {
  const [todo, setTodo] = useState<Todo | null>();

  useEffect(() => {
    const doc = todosCollection(uid).doc(todoId);

    const unsubscribe = doc.onSnapshot(snapshot => {
      const data = snapshot.data();
      if (data) {
        console.info(`firestore: receive todo: id=${todoId}`);
        const todo = toModel(snapshot.id, data);
        setTodo(todo);
      } else {
        console.info(`firestore: not found todo: id=${todoId}`);
        setTodo(null);
      }
    });
    return () => {
      console.info(`firestore: unsubscribe onSnapshot:todo`);
      unsubscribe();
    };
  }, []);

  return todo;
};
