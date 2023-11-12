// Firebase Setup
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPZyX7js3McCzhyjRSt3QEDxah9Hplunw",
  authDomain: "sofia-react.firebaseapp.com",
  projectId: "sofia-react",
  storageBucket: "sofia-react.appspot.com",
  messagingSenderId: "516890761302",
  appId: "1:516890761302:web:4fb099a41c65ab26db03f7",
  measurementId: "G-RXD9FNHR5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider()

export default app;