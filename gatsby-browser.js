/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import wrapWithProvider from './wrap-with-provider';
export const wrapRootElement = wrapWithProvider;

import firebase from 'firebase/app';

export const onClientEntry = () => {
  const config = {
    apiKey: 'AIzaSyBDn1QTZPoDz_0YqCOJGVaTQjMzAte9Jyo',
    authDomain: 'gatsbytodo.firebaseapp.com',
    databaseURL: 'https://gatsbytodo.firebaseio.com',
    projectId: 'gatsbytodo',
    storageBucket: 'gatsbytodo.appspot.com',
    messagingSenderId: '666424736882',
    appId: '1:666424736882:web:973ccfe8d6cb4cc3',
  };
  firebase.initializeApp(config);
};
