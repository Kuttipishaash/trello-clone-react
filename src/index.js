import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
        <App />,
    document.getElementById('root')
);
registerServiceWorker();
