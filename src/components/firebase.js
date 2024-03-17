import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDFAfvJfoDLTYa2OvKKWXzyZr8UN7G3meE",
    authDomain: "webathon-sece.firebaseapp.com",
    projectId: "webathon-sece",
    storageBucket: "webathon-sece.appspot.com",
    messagingSenderId: "81525963697",
    appId: "1:81525963697:web:72ca46fe601067d2bddb90",
    measurementId: "G-89ME6HWLJM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
