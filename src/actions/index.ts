import firebase from 'firebase/app';
import { todosCollection } from '@src/infrastructure/firestore';

export const addTodoAction = async (uid: string, todoName: string) => {
  const checkedName = todoName.trim();
  if (!checkedName) {
    return;
  }
  await todosCollection(uid)
    .add({
      text: todoName,
      completed: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch(error => {
      console.error('Error add todo to Firebase Database', error);
    });
  return;
};

export const updateTodoAction = async (
  uid: string,
  todoId: string,
  completed: boolean
) => {
  await todosCollection(uid)
    .doc(todoId)
    .update({
      completed,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch(error => {
      console.error('Error update todo to Firebase Database', error);
    });
  return;
};

export const deleteTodoAction = async (uid: string, todoId: string) => {
  await todosCollection(uid)
    .doc(todoId)
    .delete()
    .catch(error => {
      console.error('Error delete todo to Firebase Database', error);
    });
  return;
};
