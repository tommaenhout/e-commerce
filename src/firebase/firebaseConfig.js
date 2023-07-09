// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRryyAF1-_1QUPNKxSe4HYFwUXuPLT-vk",
  authDomain: "e-comerce-bb456.firebaseapp.com",
  databaseURL: "https://e-comerce-bb456-default-rtdb.firebaseio.com",
  projectId: "e-comerce-bb456",
  storageBucket: "e-comerce-bb456.appspot.com",
  messagingSenderId: "152888706497",
  appId: "1:152888706497:web:f678438dde34c0916e5b40",
  measurementId: "G-T93E228YWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
 