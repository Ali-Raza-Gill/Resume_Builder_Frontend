// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// firebase account of resume-builder
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGIdiT8qvrthzTyVIS08xFtdcum9VU5ZU",
  authDomain: "careerlaunch-cv.firebaseapp.com",
  projectId: "careerlaunch-cv",
  storageBucket: "careerlaunch-cv.firebasestorage.app",
  messagingSenderId: "164997318274",
  appId: "1:164997318274:web:88fc350d2a4bb4493a969b",
  measurementId: "G-NGTCDDPCYY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);