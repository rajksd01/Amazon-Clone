import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJRPJdyxWZfSxqDzJc2JeQdGlucpSQv6Y",
  authDomain: "clone-ddb8c.firebaseapp.com",
  databaseURL: "https://clone-ddb8c.firebaseio.com",
  projectId: "clone-ddb8c",
  storageBucket: "clone-ddb8c.appspot.com",
  messagingSenderId: "653231685605",
  appId: "1:653231685605:web:f90a435a2b32ddb837390c",
  measurementId: "G-LTS3LC3VXQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
