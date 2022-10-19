// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFQfTnfLZEnkKHAoGzxaMNstbKVLJrDfg",
  authDomain: "netflix-clone-5c8ba.firebaseapp.com",
  projectId: "netflix-clone-5c8ba",
  storageBucket: "netflix-clone-5c8ba.appspot.com",
  messagingSenderId: "589932456078",
  appId: "1:589932456078:web:2808f7dbf3b68de62a81df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
