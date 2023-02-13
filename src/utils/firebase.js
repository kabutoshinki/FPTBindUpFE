// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC38GI2vEuVllFlHUZXZWax306r4LezTnU",
//   authDomain: "fptproducthunt.firebaseapp.com",
//   databaseURL: "https://fptproducthunt-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "fptproducthunt",
//   storageBucket: "fptproducthunt.appspot.com",
//   messagingSenderId: "605256249348",
//   appId: "1:605256249348:web:98ccf9cfa52f5b6b68c551",
//   measurementId: "G-5M4HCLMSP5",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
