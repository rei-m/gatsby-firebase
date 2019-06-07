import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { todosCollection, toModel } from '@src/infrastructure/firestore';
import {
  Todo,
  VisibilityFilter,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '@src/types';

export const useFirestoreTodos = (uid: string, filter: VisibilityFilter) => {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    const collection = todosCollection(uid);

    let query: firebase.firestore.Query;
    switch (filter) {
      case SHOW_ACTIVE:
        query = collection
          .where(`completed`, `==`, false)
          .orderBy(`createdAt`, `desc`);
        break;
      case SHOW_COMPLETED:
        query = collection
          .where(`completed`, `==`, true)
          .orderBy(`createdAt`, `desc`);
        break;
      default:
        query = collection.orderBy(`createdAt`, `desc`);
        break;
    }

    const unsubscribe = query.onSnapshot(snapshot => {
      console.info(`firestore: receive todos: size=${snapshot.docs.length}`);

      // firebase.firestore.FieldValue.serverTimestamp で更新すると2回通知が来る？？？
      // 初回はフィールドがnullっていて、2回目の通知で入ってくる。要調査。
      const todos = snapshot.docs.map(doc => toModel(doc.id, doc.data()));
      setTodos(todos);
    });

    return () => {
      console.info(`firestore: unsubscribe onSnapshot:todos`);
      unsubscribe();
    };
  }, [filter]);

  return todos;
};
