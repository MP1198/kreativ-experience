import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';
const config = {
    apiKey: "AIzaSyApBmlf9oXJv0Ll515eAAjtgEoTWeYEaXg",
    authDomain: "kreativ-99547.firebaseapp.com",
    projectId: "kreativ-99547",
    storageBucket: "kreativ-99547.appspot.com",
    messagingSenderId: "186290016014",
    appId: "1:186290016014:web:f416213701861e3a3f115f",
    measurementId: "G-ETP9EVC71J"
}
const app = initializeApp(config);
export const db = getFirestore();
