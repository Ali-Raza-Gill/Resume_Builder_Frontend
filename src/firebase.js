// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: "resume-builder-97419.firebaseapp.com",
//     projectId: "resume-builder-97419",
//     storageBucket: "resume-builder-97419.appspot.com",
//     messagingSenderId: "1049637171309",
//     appId: "1:1049637171309:web:309feb043ca848892b8f64",
//     measurementId: "G-FMVD6HHJMR"
// };

// firebase account of resume-builder

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkj5ojQiXUAp8Uzt-i_uzu1gzTqJIcvu4",
  authDomain: "resume-builder-67027.firebaseapp.com",
  projectId: "resume-builder-67027",
  storageBucket: "resume-builder-67027.firebasestorage.app",
  messagingSenderId: "932304868051",
  appId: "1:932304868051:web:4a1a72e57c019a0ae8ba26",
  measurementId: "G-4LQF4XPCHL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);