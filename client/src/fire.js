// Import the functions
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByYkaJiJLTdGgqx0pUORH0Og4he9U32mk",
  authDomain: "login-d4c36.firebaseapp.com",
  projectId: "login-d4c36",
  storageBucket: "login-d4c36.appspot.com",
  messagingSenderId: "486704915787",
  appId: "1:486704915787:web:2a61135f09e101a381b4ce"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
