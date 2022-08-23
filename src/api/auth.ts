import { auth } from './config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

export function signin(email: string, password: string): any {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user as any;
      const token = user.accessToken;
      return { token };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function signup(email: string, password: string): any {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: any) => {
      const user = userCredential.user as any;
      const token = user.accessToken;
      return { token };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function googlesignin(): any {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      return { token };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
