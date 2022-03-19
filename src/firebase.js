import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPPjkw23VkHK1nETaBQswkdCkFHJkZLdg",
  authDomain: "nwitter-57c1d.firebaseapp.com",
  projectId: "nwitter-57c1d",
  storageBucket: "nwitter-57c1d.appspot.com",
  messagingSenderId: "282074468816",
  appId: "1:282074468816:web:55541fbcea27973a5e29d5",
};

export default firebase.initializeApp(firebaseConfig);
