// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuFpb54GqcrsFHRQtVeH4vU9ed-gyvFTc",
  authDomain: "trx-database.firebaseapp.com",
  projectId: "trx-database",
  storageBucket: "trx-database.appspot.com",
  messagingSenderId: "323562726460",
  appId: "1:323562726460:web:77b491749df41fe5ce0f39",
  measurementId: "G-7TH6VW14S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const firestoreDatabase = getFirestore(app);

export { app, database, firestoreDatabase };