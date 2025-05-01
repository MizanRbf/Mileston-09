// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq4wMqmyOVBiopaFniOqqejEpC2LQUVlQ",
  authDomain: "email-password-login-for-9c6d0.firebaseapp.com",
  projectId: "email-password-login-for-9c6d0",
  storageBucket: "email-password-login-for-9c6d0.firebasestorage.app",
  messagingSenderId: "893742141542",
  appId: "1:893742141542:web:5981b1a708957a672ddda7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
