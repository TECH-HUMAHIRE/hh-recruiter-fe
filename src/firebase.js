import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithCustomToken } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBKXYoTKmo4ZlVcoUbJR95yxp10IuzlqsE',
    authDomain: 'humahire-71b60.firebaseapp.com',
    databaseURL: 'https://humahire-71b60-default-rtdb.firebaseio.com',
    projectId: 'humahire-71b60',
    storageBucket: 'humahire-71b60.appspot.com',
    messagingSenderId: '429929150508',
    appId: '1:429929150508:web:687fb47330460ea07ff989',
    measurementId: 'G-2HB2XKVP6G'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
signInWithCustomToken(auth, localStorage.getItem('tlfb'));

const database = getDatabase(app);
const firestore = getFirestore(app);
export { database, auth, firestore };
