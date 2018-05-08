import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

ReactDOM.render(
    <Router basename="/">
        <Provider store={store}>
            <Route path="/" component={App} />
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
