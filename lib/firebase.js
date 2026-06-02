import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBktQdJxTGdrCSTGgqWLRnwV460AKOBcVY",
  authDomain: "bounceback-30932.firebaseapp.com",
  projectId: "bounceback-30932",
  storageBucket: "bounceback-30932.firebasestorage.app",
  messagingSenderId: "386768139060",
  appId: "1:386768139060:web:53d362931c3cf46e456b61",
  measurementId: "G-YEZ0ESX1Q7"
};

// Initialize Firebase only if it hasn't been initialized already (important for Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
