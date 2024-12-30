// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from firebase/firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcGPgsDdSRwfHMJITJ5CBcMSTKxPXZRYk",
  authDomain: "contact-app-3856e.firebaseapp.com",
  projectId: "contact-app-3856e",
  storageBucket: "contact-app-3856e.firebasestorage.app",
  messagingSenderId: "915092801434",
  appId: "1:915092801434:web:15e2b7f2a70fa01c899c23"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)