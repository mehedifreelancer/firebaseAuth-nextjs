// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0OpZRG58NC95mIALgkB34fssa2nx5xwg",
  authDomain: "auth-7bbd9.firebaseapp.com",
  projectId: "auth-7bbd9",
  storageBucket: "auth-7bbd9.appspot.com",
  messagingSenderId: "502560144559",
  appId: "1:502560144559:web:916719b2074912526ce85a",
  measurementId: "G-1PZQ5K1MMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
