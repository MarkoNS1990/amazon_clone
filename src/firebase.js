import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKFW0jg87q8JtLYytggor0nTfWaiAP4ng",
  authDomain: "clone-e8fbd.firebaseapp.com",
  databaseURL: "https://clone-e8fbd.firebaseio.com",
  projectId: "clone-e8fbd",
  storageBucket: "clone-e8fbd.appspot.com",
  messagingSenderId: "108914034524",
  appId: "1:108914034524:web:4c5e67ef126e2f52dfe399",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// Get the Auth service for the default app
const auth = firebase.auth();

export { db, auth };
