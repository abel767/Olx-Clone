import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf4IaUHsutGhbomSLnRnfaDVHFkBDc7_M",
  authDomain: "olx-clone-7580c.firebaseapp.com",
  projectId: "olx-clone-7580c",
  storageBucket: "olx-clone-7580c.firebasestorage.app",
  messagingSenderId: "832494773186",
  appId: "1:832494773186:web:bf6250f47a9434c92cac5b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password, mobile) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, 'user', user.uid), { // Store user data under UID
      name,
      authProvider: 'local',
      email,
      mobile
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
