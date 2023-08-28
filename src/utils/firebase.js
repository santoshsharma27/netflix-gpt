// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp0l3SGCHvPgebsUxKqIStu7I4ohrayHw",
  authDomain: "netflixgpt-79011.firebaseapp.com",
  projectId: "netflixgpt-79011",
  storageBucket: "netflixgpt-79011.appspot.com",
  messagingSenderId: "445216790001",
  appId: "1:445216790001:web:4901ea4944e1d63fc0e050",
  measurementId: "G-F0KC97KLW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
