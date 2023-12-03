// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7e97f.firebaseapp.com",
  projectId: "mern-estate-7e97f",
  storageBucket: "mern-estate-7e97f.appspot.com",
  messagingSenderId: "196507406100",
  appId: "1:196507406100:web:6e5a84ccf085939785fc01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);