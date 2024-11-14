import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCf4IaUHsutGhbomSLnRnfaDVHFkBDc7_M",
  authDomain: "olx-clone-7580c.firebaseapp.com",
  projectId: "olx-clone-7580c",
  storageBucket: "olx-clone-7580c.firebasestorage.app",
  messagingSenderId: "832494773186",
  appId: "1:832494773186:web:bf6250f47a9434c92cac5b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


const db = getFirestore(app)

const signup = async(name,email,password,mobile)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user
       await addDoc(collection(db,'user'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
        mobile
       })
    }
    catch(error){
        console.log(error)
        alert(error)
    }
}

const login = async(email,password)=>{
   try{
    await signInWithEmailAndPassword(auth, email, password)
    // alert('logged in ')
   }
   catch(error){
    console.log(error)
    alert(error)
   }
}


const logout = ()=>{
    signOut(auth)
    // alert('logged out')
}



export {auth,db,login,signup,logout}