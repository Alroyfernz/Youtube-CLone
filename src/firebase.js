import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMO21mEpmUP6nQbLFeQp7JRVFPQAUUDio",
  authDomain: "clone-33642.firebaseapp.com",
  projectId: "clone-33642",
  storageBucket: "clone-33642.appspot.com",
  messagingSenderId: "486431956671",
  appId: "1:486431956671:web:6a26995e790c0338a4b00a",
};
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
