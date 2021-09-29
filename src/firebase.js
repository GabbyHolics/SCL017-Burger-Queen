// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC2C_h35PCbalKdzeMgfDCUF3ZD0bYu5zY",

authDomain: "jinlanpizzas.firebaseapp.com",

projectId: "jinlanpizzas",

storageBucket: "jinlanpizzas.appspot.com",

messagingSenderId: "267297926422",

appId: "1:267297926422:web:0a8485ff92b17b6dccf437"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN ,
//   projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET ,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId:process.env.REACT_APP_FIREBASE_APPID 
