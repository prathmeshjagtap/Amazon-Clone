import firebase from "firebase";
                           // eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVmLqITbFyMvTiwck5NDZvgoA0ddsYCeo",
    authDomain: "clone-f8632.firebaseapp.com",
    databaseURL: "https://clone-f8632.firebaseio.com",
    projectId: "clone-f8632",
    storageBucket: "clone-f8632.appspot.com",
    messagingSenderId: "542134005652",
    appId: "1:542134005652:web:e6bb95762e418f8b24a981",
    measurementId: "G-NKQWGVQS1X"
})

const auth= firebase.auth();

export  { auth };