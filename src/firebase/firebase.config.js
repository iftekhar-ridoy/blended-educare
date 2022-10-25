// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMfQh4AsnLyRhFuMdw46jkz3QVciUIrbQ",
    authDomain: "blended-edu-care.firebaseapp.com",
    projectId: "blended-edu-care",
    storageBucket: "blended-edu-care.appspot.com",
    messagingSenderId: "824893059704",
    appId: "1:824893059704:web:fb5c06bf37e7d04b0bf38d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 