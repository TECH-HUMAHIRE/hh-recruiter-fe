import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging';
const firebaseConfig = {
    apiKey: 'AIzaSyAd34vq0jS2A34RXo-wQLbR9y1xyXZrQz8',
    authDomain: 'humahire-prod.firebaseapp.com',
    databaseURL:
        'https://humahire-prod-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'humahire-prod',
    storageBucket: 'humahire-prod.appspot.com',
    messagingSenderId: '550416658166',
    appId: '1:550416658166:web:f373a441a0a9c4f8b146d7',
    measurementId: 'G-E7CHKX8HY8'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const messaging = getMessaging(app);
signInWithCustomToken(auth, localStorage.getItem('tlfb'));
const database = getDatabase(app);
const firestore = getFirestore(app);

export { database, auth, firestore, app, getToken, messaging };
