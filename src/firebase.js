// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBl9sZ1BbgWzhIPqvJZFoewOVZc4q3HA0",
  authDomain: "chatapp-d3c26.firebaseapp.com",
  projectId: "chatapp-d3c26",
  storageBucket: "chatapp-d3c26.appspot.com",
  messagingSenderId: "580815889461",
  appId: "1:580815889461:web:36ba55063918aa3512bd7c",
  measurementId: "G-4F1GXEKWRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
