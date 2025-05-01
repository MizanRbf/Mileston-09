// Don't Share Firebase Config Publicly

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNGNaJDR4LANmDAyUZp4Pzi-6d6d4rWZ0",
  authDomain: "simple-firebase-auth2-309d5.firebaseapp.com",
  projectId: "simple-firebase-auth2-309d5",
  storageBucket: "simple-firebase-auth2-309d5.firebasestorage.app",
  messagingSenderId: "895363161250",
  appId: "1:895363161250:web:59246011983b09c6388bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);