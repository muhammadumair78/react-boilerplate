import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import { history } from './app/history';
import './assets/styles/main.scss';
import './index.css';
import Routes from './app/routes';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
