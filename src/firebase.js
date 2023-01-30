// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3cqh9C0NnwMlZhilxnCf7U8RkwG0IOQ0",
  authDomain: "text-app-25868.firebaseapp.com",
  projectId: "text-app-25868",
  storageBucket: "text-app-25868.appspot.com",
  messagingSenderId: "733974433349",
  appId: "1:733974433349:web:600a227fe1b7dacc72dd2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
