import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyChv6U0IF67yzTo4HybPa1NDgwioB1VeU0",
  authDomain: "twitter-clone-4980d.firebaseapp.com",
  projectId: "twitter-clone-4980d",
  storageBucket: "twitter-clone-4980d.appspot.com",

  messagingSenderId: "1038776732961",
  appId: "1:1038776732961:web:efc97d0d4c6ac58f5a4260"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

export default db;