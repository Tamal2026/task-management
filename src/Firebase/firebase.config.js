// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqlxmb8AoRzvXAh6F5deO3GDnjo9UBTvo",
  authDomain: "task-management-babaa.firebaseapp.com",
  projectId: "task-management-babaa",
  storageBucket: "task-management-babaa.appspot.com",
  messagingSenderId: "852907231989",
  appId: "1:852907231989:web:2beefb25a47c94359cd3bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;