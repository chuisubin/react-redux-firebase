import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD2H0MEt7yhHluI9FklYhdozuUlra380r8",
  authDomain: "react-firebase-subin.firebaseapp.com",
  databaseURL: "https://react-firebase-subin.firebaseio.com",
  projectId: "react-firebase-subin",
  storageBucket: "react-firebase-subin.appspot.com",
  messagingSenderId: "854058764694",
  appId: "1:854058764694:web:69d59d88c23a7e7344b5b7",
  measurementId: "G-3N1K4S7J98"
};

firebase.initializeApp(config);
firebase.firestore();

// this.auth = firebase.auth();
// this.db = firebase.firestore();

// login(email, password) {
//   return this.auth.signInWithEmailAndPassword(email, password);
// }

// logOut() {
//   return this.auth.signOut();
// }

// async register(name, email, password) {
//   await this.auth.createUserWithEmailAndPassword(email, password);
//   console.log("register");
//   return this.auth.currentUser.updateProfile({ displayName: name });
// }
// addText = (user, text) => {
//   this.db.collection("Test").add({
//     User: user,
//     Text: text
//   });
// };

export default firebase;
