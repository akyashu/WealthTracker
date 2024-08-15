import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmyhzJryzmRFq2qSNSadyBJf9UrgwuIfI",
  authDomain: "finance-analyser-94181.firebaseapp.com",
  projectId: "finance-analyser-94181",
  storageBucket: "finance-analyser-94181.appspot.com",
  messagingSenderId: "798937189052",
  appId: "1:798937189052:web:9260c4255a3bead11f1eb9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
