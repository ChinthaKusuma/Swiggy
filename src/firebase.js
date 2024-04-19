// Import the functions you need from the SDKs you need
\
import firebase from "firebase/app"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiJkVbnO4egoHhryyJ1aUqVEBTw6w39HY",
  authDomain: "project2-49250.firebaseapp.com",
  projectId: "project2-49250",
  storageBucket: "project2-49250.appspot.com",
  messagingSenderId: "331357032035",
  appId: "1:331357032035:web:c5ec4a32a566b479e47256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase