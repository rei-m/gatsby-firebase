import React from 'react';
import FirebaseAuthProvider from './src/contexts/FirebaseAuthProvider';

// eslint-disable-next-line react/display-name
export default ({ element }) => (
  <FirebaseAuthProvider>{element}</FirebaseAuthProvider>
);
