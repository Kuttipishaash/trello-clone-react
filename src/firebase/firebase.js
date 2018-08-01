import firebase from 'firebase';

const FirebaseConfig = {
    apiKey: "AIzaSyDyNS50I-rg-7R_qtuzGoW_XxI7pLuNIRw",
    authDomain: "react-todo-app-2b86b.firebaseapp.com",
    databaseURL: "https://react-todo-app-2b86b.firebaseio.com",
    projectId: "react-todo-app-2b86b",
    storageBucket: "react-todo-app-2b86b.appspot.com",
    messagingSenderId: "972612220868"
};

firebase.initializeApp(FirebaseConfig);
export const firestore = firebase.firestore();
export const authentication = firebase.auth();
export const realtimeDatabase = firebase.database();