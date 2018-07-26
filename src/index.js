import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, BrowserRouter } from 'react-router';
import routes from './routes'; 


ReactDOM.render(
    <Router routes={routes}/>,
    document.getElementById('root')
);
registerServiceWorker();
