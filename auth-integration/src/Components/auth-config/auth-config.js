// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHbMkhdV_YCt9bGOv2iZScibPlaImyhsA",
  authDomain: "auth-integration-c3fd9.firebaseapp.com",
  projectId: "auth-integration-c3fd9",
  storageBucket: "auth-integration-c3fd9.firebasestorage.app",
  messagingSenderId: "797198914236",
  appId: "1:797198914236:web:443c3c0d489e6d4f63f6b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
