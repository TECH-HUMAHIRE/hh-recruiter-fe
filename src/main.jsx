import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import App from './routes/RouteApp';
import './index.less';
import { store } from './app/store';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('Service worker registered:');
            })
            .catch((err) => {
                console.log('Service worker is not register error:', err);
            });
        navigator.serviceWorker
            .register('/firebase-messaging-sw.js')
            .then((registration) => {
                console.log('Firebase sw registered:');
            })
            .catch((err) => {
                console.log('Firebase sw is not register error:', err);
            });
    });
}

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
