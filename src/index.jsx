import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-mfwvy5sahjwdxrjb.us.auth0.com"
            clientId="QXRcmQXRgSddfKl4duHCSpGebWmFKLkQ"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <Provider store={store}>
                <App />
            </Provider>
        </Auth0Provider>
    </React.StrictMode>
    , document.getElementById('root'));
