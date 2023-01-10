import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import App from './routes/RouteApp';
import './index.less';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </>
);
