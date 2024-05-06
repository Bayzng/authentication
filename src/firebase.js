import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqHB5xuFmv0FQoOl58afpYooY8h4jczgc",
  authDomain: "learning-bd294.firebaseapp.com",
  projectId: "learning-bd294",
  storageBucket: "learning-bd294.appspot.com",
  messagingSenderId: "423093412578",
  appId: "1:423093412578:web:3fb67b714a5d09e89774bb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()