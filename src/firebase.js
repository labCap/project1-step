import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWgC8NZv5TH4CAWd-CPR_60kO9PnicMtU",
  authDomain: "project1-step-ac909.firebaseapp.com",
  projectId: "project1-step-ac909",
  storageBucket: "project1-step-ac909.appspot.com",
  messagingSenderId: "447581027383",
  appId: "1:447581027383:web:e40becd4050615167453b2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
