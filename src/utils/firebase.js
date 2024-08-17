// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEiNw9i2y3SgjjOdz_VIENoiseSKHkXpk",
  authDomain: "netflixgpt-67f4f.firebaseapp.com",
  projectId: "netflixgpt-67f4f",
  storageBucket: "netflixgpt-67f4f.appspot.com",
  messagingSenderId: "985565544523",
  appId: "1:985565544523:web:e438686f8f6d19f6b48dce",
  measurementId: "G-Z46WB5NWK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
