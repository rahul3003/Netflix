// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY1oVGFxx97rDlTeR2eGQbn9AWhnIxSRk",
  authDomain: "react-netflix-clone-5a38c.firebaseapp.com",
  projectId: "react-netflix-clone-5a38c",
  storageBucket: "react-netflix-clone-5a38c.appspot.com",
  messagingSenderId: "456958254226",
  appId: "1:456958254226:web:78859064687b49a2461a4b",
  measurementId: "G-B1L7GLZ8JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireBaseAuth = getAuth(app)