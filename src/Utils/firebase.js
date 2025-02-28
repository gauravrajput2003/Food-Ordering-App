// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzHt_TSTQ4Is9K_HoPjDJRw5PTZM6U-vs",
  authDomain: "foodorderingapp-c8a49.firebaseapp.com",
  projectId: "foodorderingapp-c8a49",
  storageBucket: "foodorderingapp-c8a49.firebasestorage.app",
  messagingSenderId: "309138705122",
  appId: "1:309138705122:web:93ac24dadea15b517aacbb",
  measurementId: "G-PFDFEVD4XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);