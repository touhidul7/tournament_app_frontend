// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdPcKgFK5zjTScD3wDDlX5UaJ_UDBchYM",
  authDomain: "game-fbf66.firebaseapp.com",
  projectId: "game-fbf66",
  storageBucket: "game-fbf66.firebasestorage.app",
  messagingSenderId: "554364725033",
  appId: "1:554364725033:web:6bd591d30ec5698067f938",
  measurementId: "G-0LXHC9VNX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db }
// const analytics = getAnalytics(app);