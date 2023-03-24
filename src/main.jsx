import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import App from './routes/RouteApp';
import './index.less';
import { store } from './app/store';
// import firebase from 'firebase/compat/app';
// import 'firebase/database';
// import { FirebaseDatabaseProvider } from '@react-firebase/database';
// const firebaseConfig = {
//     apiKey: 'AIzaSyBKXYoTKmo4ZlVcoUbJR95yxp10IuzlqsE',
//     authDomain: 'humahire-71b60.firebaseapp.com',
//     databaseURL: 'https://humahire-71b60-default-rtdb.firebaseio.com',
//     projectId: 'humahire-71b60',
//     storageBucket: 'humahire-71b60.appspot.com',
//     messagingSenderId: '429929150508',
//     appId: '1:429929150508:web:687fb47330460ea07ff989',
//     measurementId: 'G-2HB2XKVP6G'
// };
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
