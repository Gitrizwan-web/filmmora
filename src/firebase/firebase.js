import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDD3581QFzGIVAdvlX3QaTaWbAqUbZ7GEo",
  authDomain: "zakat-calculator-36347.firebaseapp.com",
  projectId: "zakat-calculator-36347",
  storageBucket: "zakat-calculator-36347.appspot.com",
  messagingSenderId: "401197298670",
  appId: "1:401197298670:web:6022077dae48f63a4d54ff",
  measurementId: "G-FZ2EJ5RM67"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;