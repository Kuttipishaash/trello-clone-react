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
const firestoreSettings = {timestampsInSnapshots: true};
firestore.settings(firestoreSettings);

export const authentication = firebase.auth();

export const realtimeDatabase = firebase.database();


/*
index.js:2178 [2018-08-01T18:03:49.079Z]  @firebase/firestore: Firestore (5.0.4): 
The behavior for Date objects stored in Firestore is going to change
AND YOUR APP MAY BREAK.
To hide this warning and ensure your app does not break, you need to add the
following code to your app before calling any other Cloud Firestore methods:

  const firestore = firebase.firestore();
  const settings = { your settings... timestampsInSnapshots: true};
  firestore.settings(settings);

With this change, timestamps stored in Cloud Firestore will be read back as
Firebase Timestamp objects instead of as system Date objects. So you will also
need to update code expecting a Date to instead expect a Timestamp. For example:

  // Old:
  const date = snapshot.get('created_at');
  // New:
  const timestamp = snapshot.get('created_at');
  const date = timestamp.toDate();

Please audit all existing usages of Date when you enable the new behavior. In a
future release, the behavior will change to the new behavior, so if you do not
follow these steps, YOUR APP MAY BREAK.*/