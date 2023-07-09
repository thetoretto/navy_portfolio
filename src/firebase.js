// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "@firebase/firestore";
\
const firebaseConfig = {
  apiKey: "AIzaSyD_ZHooU5epnUE543wOOK4msRQce42FedM",
  authDomain: "nvvy-14d2d.firebaseapp.com",
  projectId: "nvvy-14d2d",
  storageBucket: "nvvy-14d2d.appspot.com",
  messagingSenderId: "741181429155",
  appId: "1:741181429155:web:4b508c2907a185b2eff616",
  measurementId: "G-RX21HTMMK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
