import * as React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const GoogleAuthButton = () => {
  const onClickHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return <button onClick={onClickHandler}>GoogleアカウントでSign-in</button>;
};

export default GoogleAuthButton;
