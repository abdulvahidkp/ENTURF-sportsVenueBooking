// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDa74m2owUPYI1ckuVnQaEcDj0e93Dvfn0",
  authDomain: "event-management-b6f65.firebaseapp.com",
  projectId: "event-management-b6f65",
  storageBucket: "event-management-b6f65.appspot.com",
  messagingSenderId: "855073743451",
  appId: "1:855073743451:web:8832aee2b30f0c4ce7957e",
  measurementId: "G-BRJ2GXWJZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export default app;