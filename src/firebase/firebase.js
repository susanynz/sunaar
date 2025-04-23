//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2W7qr7BHqhlpBfZfRxviYE8y7glrc7YY",
  authDomain: "sunnar-c87c2.firebaseapp.com",
  projectId: "sunnar-c87c2",
  storageBucket: "sunnar-c87c2.firebasestorage.app",
  messagingSenderId: "895389551545",
  appId: "1:895389551545:web:d14342c84a751c45ad0468",
  measurementId: "G-9LYYQ7EFFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };