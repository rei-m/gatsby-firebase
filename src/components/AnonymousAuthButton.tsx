import * as React from 'react';
import firebase from 'firebase/app';

const AnonymousAuthButton = () => {
  const onClickHandler = () => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(error => {
        console.error(
          `signInAnonymously failed. code: ${error.code} message: ${
            error.message
          }`
        );
      });
  };

  return <button onClick={onClickHandler}>名無しで Sign-in</button>;
};

export default AnonymousAuthButton;
