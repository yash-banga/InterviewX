
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewp-6f6c1.firebaseapp.com",
  projectId: "interviewp-6f6c1",
  storageBucket: "interviewp-6f6c1.firebasestorage.app",
  messagingSenderId: "243257811058",
  appId: "1:243257811058:web:d91e84b5b7db449b3fa2eb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth , provider};
