import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification ,signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";




const firebaseConfig = {
  apiKey: "AIzaSyDLiEJoy_fLUiDsoEhzovG4yjMX9cXWV_s",
  authDomain: "sign-in-mine.firebaseapp.com",
  projectId: "sign-in-mine",
  storageBucket: "sign-in-mine.appspot.com",
  messagingSenderId: "743237960838",
  appId: "1:743237960838:web:f3437c0b28ac7c6d3afd07"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification ,signOut }
