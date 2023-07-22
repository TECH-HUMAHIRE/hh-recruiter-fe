import { env } from '@configs';

const configuration = {
    development: {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    }
};

export default configuration;
// export default {
//   apiKey: 'AIzaSyB3O7449OeejqUl10m8PLhm5gbWceN6w-M',
//   authDomain: 'production-invilink.firebaseapp.com',
//   databaseURL: 'https://production-invilink.firebaseio.com',
//   projectId: 'production-invilink',
//   storageBucket: 'production-invilink.appspot.com',
//   messagingSenderId: '484212005175',
//   appId: '1:484212005175:web:3550a8cf54e46e8f'
// };
