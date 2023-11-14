import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import firebase from "firebase/compat/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"; //

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJP80sV_6OGJ6OoMDdhwZ-qpcnkrSV3TQ",
  authDomain: "messengerapp-b5bec.firebaseapp.com",
  projectId: "messengerapp-b5bec",
  storageBucket: "messengerapp-b5bec.appspot.com",
  messagingSenderId: "79833319891",
  appId: "1:79833319891:web:7e5e146586eff776ea4726",
  measurementId: "G-X9G1KKQVQZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const storage = getStorage(app); //
export {firestore};

export default firebase;
