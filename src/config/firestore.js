import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_FIRESTORE_API;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "e-commerce-app-d579a.firebaseapp.com",
  projectId: "e-commerce-app-d579a",
  storageBucket: "e-commerce-app-d579a.appspot.com",
  messagingSenderId: "849758766550",
  appId: "1:849758766550:web:091b6de96fd1bdca79d077",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
