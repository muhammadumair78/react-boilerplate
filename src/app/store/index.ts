import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { allReducers } from '../reducers';
import { history } from '../history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

let composeEnhancer = compose(
    applyMiddleware(routerMiddleware(history), thunk)
);

const appReducer = combineReducers({
    ...allReducers,
    router: routerReducer,
});

export const store = createStore(appReducer, composeEnhancer);