import { useContext } from 'react';
import { FirebaseAuthContext } from '@src/contexts/FirebaseAuthProvider';

export const useFirebaseUser = () => useContext(FirebaseAuthContext).user;
