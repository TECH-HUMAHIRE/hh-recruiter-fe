import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import App from './routes/RouteApp';
import './index.less';
import { store } from './app/store';
import { onMessage } from 'firebase/messaging';
import { messaging } from './firebase';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('Service worker registered:', registration);
            })
            .catch((err) => {
                console.log('Service worker is not register error:', err);
            });
    });
}
onMessage(messaging, (payload) => {
    console.log('Received foreground message:', payload);
    // Handle the notification data and display it to the user
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        {/* <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}> */}
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        {/* </FirebaseDatabaseProvider> */}
    </>
);
