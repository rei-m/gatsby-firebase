import * as React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignOutButton = () => {
  const onClickHandler = () => {
    firebase.auth().signOut();
  };

  return <button onClick={onClickHandler}>Sign-out する</button>;
};

export default SignOutButton;
