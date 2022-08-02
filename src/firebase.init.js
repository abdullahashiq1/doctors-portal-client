// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARDfGMLbwjtxeGCCEl1Ei0opFkPExE310",
  authDomain: "doctors-portal-863d4.firebaseapp.com",
  projectId: "doctors-portal-863d4",
  storageBucket: "doctors-portal-863d4.appspot.com",
  messagingSenderId: "220597745114",
  appId: "1:220597745114:web:0d26d62235cc2231eafce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

