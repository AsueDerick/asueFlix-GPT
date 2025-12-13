// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCixmBEuIcHXe0-bduGak6Qi8e9xtCy9OA",
  authDomain: "asueflix-gpt.firebaseapp.com",
  projectId: "asueflix-gpt",
  storageBucket: "asueflix-gpt.firebasestorage.app",
  messagingSenderId: "1065888190330",
  appId: "1:1065888190330:web:c64219db13e90d4e0690c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
