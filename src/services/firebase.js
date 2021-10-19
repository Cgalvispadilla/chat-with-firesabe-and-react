import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyCaWRkdaYDsyLOWjma3Q7UdyUa2uwmPN3I",
  authDomain: "chat-cg99.firebaseapp.com",
  projectId: "chat-cg99",
  storageBucket: "chat-cg99.appspot.com",
  messagingSenderId: "463525117909",
  appId: "1:463525117909:web:6914ff1945c8d1bbd3475c",
  measurementId: "G-WV2KEYN478",
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
