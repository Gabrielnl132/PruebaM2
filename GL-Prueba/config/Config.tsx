import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDOTvFxZQMtqZkTkfp6oJaKb2cqIkIZofc",
    authDomain: "prueba-cf251.firebaseapp.com",
    projectId: "prueba-cf251",
    storageBucket: "prueba-cf251.appspot.com",
    messagingSenderId: "554738028536",
    appId: "1:554738028536:web:021bd8405de5213c2f500d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);