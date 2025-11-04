// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from 'react-toastify';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDbphh29LLHVyiowZV5VMhxkVbsn4v40Q",
  authDomain: "netflix-clone-1fff7.firebaseapp.com",
  projectId: "netflix-clone-1fff7",
  storageBucket: "netflix-clone-1fff7.firebasestorage.app",
  messagingSenderId: "328170092311",
  appId: "1:328170092311:web:a67f6387115e38554f2952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db= getFirestore(app);

const signUp= async (name, email, password)=>{
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
      uid: user.uid,
      name,
      authProvider:"local",
      email,

    });
  }
  catch(error){
    console.log(error);
    toast.error(error.code);
  }
}

const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    console.log(error);
    toast.error(error.code);
  }
}

const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signUp,logout};

