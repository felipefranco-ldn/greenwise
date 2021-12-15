// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: 'AIzaSyB6Ui7Fu7sDLo0PhvPk5S53CPMhQkP4CKg',
//   authDomain: 'library-of-pizza.firebaseapp.com',
//   databaseURL:
//     'https://library-of-pizza-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'library-of-pizza',
//   storageBucket: 'library-of-pizza.appspot.com',
//   messagingSenderId: '574971762580',
//   appId: '1:574971762580:web:82ffc3aa3c5d3fc99fa181',
//   measurementId: '${config.measurementId}',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAwoLZW4Y_eExvxkxr3keGXmXxtTbulNM8',
  authDomain: 'ff-green-wise.firebaseapp.com',
  projectId: 'ff-green-wise',
  storageBucket: 'ff-green-wise.appspot.com',
  messagingSenderId: '222346819801',
  appId: '1:222346819801:web:8df26fc94123497197e6c8',
  measurementId: 'G-ME3R21D2HC',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection('users')
      .where('uid', '==', user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection('users').add({
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
