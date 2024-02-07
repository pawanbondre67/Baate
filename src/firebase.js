// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAkyNyFYB6NO_N9rHn8rL5SlGRGD00SB4Q",
  authDomain: "baate-a73f5.firebaseapp.com",
  projectId: "baate-a73f5",
  storageBucket: "baate-a73f5.appspot.com",
  messagingSenderId: "887913523669",
  appId: "1:887913523669:web:f35963b9d11b6b45c4b55c",
  measurementId: "G-7W7JKTD5EF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();