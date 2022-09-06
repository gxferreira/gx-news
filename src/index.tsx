import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AUTH0_SETTINGS from './auth0.settings';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';


const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Auth0Provider {...AUTH0_SETTINGS}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
