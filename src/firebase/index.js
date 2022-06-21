import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBdQ61ClwqDzqTqlv2lau0bYJEuVhyZfRo",
    authDomain: "university-fals.firebaseapp.com",
    projectId: "university-fals",
    storageBucket: "university-fals.appspot.com",
    messagingSenderId: "310047380099",
    databaseURL: "https://university-fals-default-rtdb.firebaseio.com/",
    appId: "1:310047380099:web:25cc8e26c1a224a66b41b6",
    measurementId: "G-V6WES5YEKE"
};

firebase.initializeApp(firebaseConfig);

export default firebase
