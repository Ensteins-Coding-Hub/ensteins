import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const rawConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const rawConfig = {
  apiKey: "AIzaSyCf6yS6TLqi7amxgHNMfj4RHIfcYfOGQEw",
  authDomain: "ensiteins.firebaseapp.com",
  projectId: "ensiteins",
  storageBucket: "ensiteins.firebasestorage.app",
  messagingSenderId: "609794867473",
  appId: "1:609794867473:web:baca97591ec11e98114cb0",
  measurementId: "G-F5D8D4WYK9",
};

// Filter out undefined keys to prevent Firebase initialization warnings/errors
const firebaseConfig = Object.fromEntries(
  Object.entries(rawConfig).filter(
    ([_, v]) => typeof v === "string" && v.length > 0,
  ),
);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
