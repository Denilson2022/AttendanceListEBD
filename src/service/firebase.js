/* import firebase from "firebase/compat/app";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCPTo7liV5Z1iXa90KGKWyjZcIcIh8xaIg",
    authDomain: "meuprimeiro-api.firebaseapp.com",
    projectId: "meuprimeiro-api",
    storageBucket: "meuprimeiro-api.appspot.com",
    messagingSenderId: "287669800459",
    appId: "1:287669800459:web:1dca44afa4f224a052410e"
  };




const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { firebase, auth, app }; */

/* import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
 */

const FirebaseConfig = {
  
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  
 
/*     apiKey: "AIzaSyBs2HcwXcaFhRyr7R7Mbi-06h7pWhX37W4",
    authDomain: "ebd4-ef0e8.firebaseapp.com",
    projectId: "ebd4-ef0e8",
    storageBucket: "ebd4-ef0e8.appspot.com",
    messagingSenderId: "817327298885",
    appId: "1:817327298885:web:d9dcfbb337f961b242462c" */
};

export default FirebaseConfig

