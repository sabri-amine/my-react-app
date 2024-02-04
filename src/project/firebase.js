// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbeXT54b0Rhhj_FaFX7cOsXJmo64gc1EM ",
  authDomain: "react-app-a7003.firebaseapp.com",
  projectId: "react-app-a7003",
  storageBucket: "react-app-a7003.appspot.com",
  messagingSenderId: "274681383668",
  appId: "1:274681383668:web:4c2f03fa489773c5f36ca1",
  measurementId: "G-599THTJ82N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
