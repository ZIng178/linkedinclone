import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBo8AS_plgY5EAQmNIld8lwY65YesSiFA",
  authDomain: "linkedinclone-wangdi.firebaseapp.com",
  projectId: "linkedinclone-wangdi",
  storageBucket: "linkedinclone-wangdi.appspot.com",
  messagingSenderId: "361820749700",
  appId: "1:361820749700:web:03eccb8512fae15595e7d1",
  measurementId: "G-Y3JL8JLM04",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
