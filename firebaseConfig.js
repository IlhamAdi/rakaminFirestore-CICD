import { initializeApp } from 'firebase/app';
import { getFirestore , collection, addDoc, getDocs,deleteDoc,doc} from "firebase/firestore";


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDUPi0TResxZwFPxuPN4i2REOpKjlioluM",
    authDomain: "pradanaa-b3515.firebaseapp.com",
    projectId: "pradanaa-b3515",
    storageBucket: "pradanaa-b3515.appspot.com",
    messagingSenderId: "963049088957",
    appId: "1:963049088957:web:3ea620358e029a7e1a14d4",
    measurementId: "G-L0HTEBNT47"
};

const app = initializeApp(firebaseConfig);
//inisialisasi DB fireStore
const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export {db, addDoc, collection, app, getDocs, doc, deleteDoc}