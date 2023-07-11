import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKyhTnT-ccZf3kY6qBJZ2mfCTYGrFHQSQ",

  authDomain: "startship-54f81.firebaseapp.com",

  projectId: "startship-54f81",

  storageBucket: "startship-54f81.appspot.com",

  messagingSenderId: "791674076981",

  appId: "1:791674076981:web:fd95af520c37343aa0167c",

  measurementId: "G-4GGFBFRRD7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
