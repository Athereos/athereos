// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1xUPFz4v4hv6pbYit5DR0Qv9OiUN-lQA",
  authDomain: "athereos-3d59f.firebaseapp.com",
  projectId: "athereos-3d59f",
  storageBucket: "athereos-3d59f.appspot.com",
  messagingSenderId: "417767878089",
  appId: "1:417767878089:web:078d84f85283dbfcf38c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);