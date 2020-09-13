import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0yg-P9rpnIC0ava1QlpOOtJA5im5c35w",
    authDomain: "facebook-d5d5f.firebaseapp.com",
    databaseURL: "https://facebook-d5d5f.firebaseio.com",
    projectId: "facebook-d5d5f",
    storageBucket: "facebook-d5d5f.appspot.com",
    messagingSenderId: "723408015534",
    appId: "1:723408015534:web:3ff58e1a7745d253b35d3f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;