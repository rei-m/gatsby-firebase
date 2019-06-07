import firebase from 'firebase/app';

export const todosCollection = (uid: string) =>
  firebase
    .firestore()
    .collection(`users`)
    .doc(uid)
    .collection(`todos`);

export const toModel = (id: string, data: firebase.firestore.DocumentData) => {
  const createdAt = data.createdAt
    ? data.createdAt.toDate().getTime()
    : undefined;
  const updatedAt = data.updatedAt
    ? data.updatedAt.toDate().getTime()
    : undefined;
  return {
    id,
    text: data.text,
    completed: data.completed,
    createdAt,
    updatedAt,
  };
};
