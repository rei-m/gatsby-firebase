import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { User } from '@src/types';

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.info(`firebase: authorized (uid: ${user.uid})`);
        const userName = user.displayName ? user.displayName : '名無し';
        setUser({ uid: user.uid, name: userName });
      } else {
        console.info(`firebase: unauthorized`);
        setUser(null);
      }
    });

    return () => {
      console.info(`firebase: unsubscribe onAuthStateChanged`);
      unsubscribe();
    };
  }, []);

  return user;
};
