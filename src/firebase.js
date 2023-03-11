import firebase, { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDO4qnX0jCBhQjDlvSOnuJRjqdy5zl0GIY",
    authDomain: "assignment3-1540f.firebaseapp.com",
    projectId: "assignment3-1540f",
    storageBucket: "assignment3-1540f.appspot.com",
    messagingSenderId: "96787038244",
    appId: "1:96787038244:web:3f67a04de4c237b901d8b1",
    measurementId: "G-WQCLKHHQ3S"
  };
  

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app