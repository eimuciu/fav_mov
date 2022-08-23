// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAWkTuD41DIpB6rBkYWjhCaSaoyGlfU7xI',
  authDomain: 'fav-movie-45b7f.firebaseapp.com',
  projectId: 'fav-movie-45b7f',
  storageBucket: 'fav-movie-45b7f.appspot.com',
  messagingSenderId: '653949967944',
  appId: '1:653949967944:web:dfb0817a3c42e1e411027d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
