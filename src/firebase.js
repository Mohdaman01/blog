// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA995cF0FUv_WNsLC3L8KasaS2GuEp8ni4",
  authDomain: "my-blog-40b65.firebaseapp.com",
  projectId: "my-blog-40b65",
  storageBucket: "my-blog-40b65.appspot.com",
  messagingSenderId: "91563828249",
  appId: "1:91563828249:web:5607d6d046591c67aa7688"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// exporting db instance
export const db = getFirestore(app);
 
 