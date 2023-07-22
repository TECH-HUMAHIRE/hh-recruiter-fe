importScripts(
    'https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js'
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
    // Add your Firebase project configuration here
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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const { title, body } = payload.notification;
    const channel = new BroadcastChannel('backgroundMessageChannel');
    channel.postMessage({ response: payload });
    // Handle the received message here
    self.registration.showNotification(title, { body });
});
