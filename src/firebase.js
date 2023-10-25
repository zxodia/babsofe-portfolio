
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
 
const firebaseConfig = {
  apiKey: "AIzaSyBmwF3aZWuAjvvON0S5ylZwOnB4Gxv9kp4",
  authDomain: "babs-portfolio-dashboard.firebaseapp.com",
  projectId: "babs-portfolio-dashboard",
  storageBucket: "babs-portfolio-dashboard.appspot.com",
  messagingSenderId: "358649892361",
  appId: "1:358649892361:web:2cec880fa792135a69b2d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);