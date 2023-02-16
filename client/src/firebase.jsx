// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3HvCYlUXbaQ1VGgnGDtX_2B6xB4sYKUQ",
  authDomain: "enturf-8d054.firebaseapp.com",
  projectId: "enturf-8d054",
  storageBucket: "enturf-8d054.appspot.com",
  messagingSenderId: "768662486786",
  appId: "1:768662486786:web:53d7ac59f558716587cc1b",
  measurementId: "G-25CW7EE1DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export default app;