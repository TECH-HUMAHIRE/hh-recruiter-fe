// @ts-ignore
importScripts(
    'https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js'
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
    // Add your Firebase project configuration here
    apiKey: 'AIzaSyBKXYoTKmo4ZlVcoUbJR95yxp10IuzlqsE',
    authDomain: 'humahire-71b60.firebaseapp.com',
    databaseURL: 'https://humahire-71b60-default-rtdb.firebaseio.com',
    projectId: 'humahire-71b60',
    storageBucket: 'humahire-71b60.appspot.com',
    messagingSenderId: '429929150508',
    appId: '1:429929150508:web:687fb47330460ea07ff989',
    measurementId: 'G-2HB2XKVP6G'
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
