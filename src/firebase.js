// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFl3HYReLE8iilRN60CV9_DEAZv60ljkM",
  authDomain: "react-activity-a3bff.firebaseapp.com",
  projectId: "react-activity-a3bff",
  storageBucket: "react-activity-a3bff.appspot.com",
  messagingSenderId: "99125362660",
  appId: "1:99125362660:web:b895b6f29d73ba967811f1",
  measurementId: "G-4MXJBTPFB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}