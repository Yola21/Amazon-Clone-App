import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC19_DysA7vswXeujLtFSJMRAf3t0wI91w",
    authDomain: "clone-28ae2.firebaseapp.com",
    databaseURL: "https://clone-28ae2.firebaseio.com",
    projectId: "clone-28ae2",
    storageBucket: "clone-28ae2.appspot.com",
    messagingSenderId: "657551334854",
    appId: "1:657551334854:web:eb7edf9b337a5ba049a6c7",
    measurementId: "G-L1D2PZXFPJ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };