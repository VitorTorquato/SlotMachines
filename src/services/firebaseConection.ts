
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBRYgfYgRn51fkVCbUXW_4VyGc-tQ0h1Ic",
  authDomain: "slotmachines-75fc0.firebaseapp.com",
  projectId: "slotmachines-75fc0",
  storageBucket: "slotmachines-75fc0.firebasestorage.app",
  messagingSenderId: "1026069972582",
  appId: "1:1026069972582:web:dc9a151bf6e7c346324fa7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};