// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBBbKznBcduVFnXir4qQHhLr8_e6sOkCbs",
  authDomain: "to-do-list-db3c9.firebaseapp.com",
  projectId: "to-do-list-db3c9",
  storageBucket: "to-do-list-db3c9.firebasestorage.app",
  messagingSenderId: "192027121719",
  appId: "1:192027121719:web:a1865288a4969cc49387b2",
  measurementId: "G-K7YKWHZDK6"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
