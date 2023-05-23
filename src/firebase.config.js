// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDokJAoN_WPoPLNzy4NORJY71EYV-FFGM",
  authDomain: "airblink-task.firebaseapp.com",
  projectId: "airblink-task",
  storageBucket: "airblink-task.appspot.com",
  messagingSenderId: "424492154318",
  appId: "1:424492154318:web:8a995b11fd3b3f4a7f3f9f",
  measurementId: "G-M0T8KH9M06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
