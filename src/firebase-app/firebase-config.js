import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE_oPA-RSAXYY7_QxSH3vG6rIOVh7_C2I",
  authDomain: "monkey-blogging-d4217.firebaseapp.com",
  projectId: "monkey-blogging-d4217",
  storageBucket: "monkey-blogging-d4217.appspot.com",
  messagingSenderId: "899892114360",
  appId: "1:899892114360:web:0ccc5d869f4d49477f154d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

