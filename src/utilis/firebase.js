// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB86RSlCZQ6MZ7cAmcZR-ozOJydWytIPJg",
  authDomain: "netflix-gpt-64e42.firebaseapp.com",
  projectId: "netflix-gpt-64e42",
  storageBucket: "netflix-gpt-64e42.firebasestorage.app",
  messagingSenderId: "141440415887",
  appId: "1:141440415887:web:cc7541c2bc248889d458fa",
  measurementId: "G-G4H3M2X1Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();