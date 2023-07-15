// Import the functions you need from the SDKs you need
import { getApp,getApps, initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "blog-44f94.firebaseapp.com",
  projectId: "blog-44f94",
  storageBucket: "blog-44f94.appspot.com",
  messagingSenderId: "867616584937",
  appId: "1:867616584937:web:85f50665b805eef38dac78",
  measurementId: "G-P1SDKPLT35"
};

// Initialize Firebase
const app = getApps().length?getApp(): initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider()
export {auth,provider,db};
// const analytics = getAnalytics(app);
