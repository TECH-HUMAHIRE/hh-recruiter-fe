importScripts(
    'https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js'
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
    // Add your Firebase project configuration here
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
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
