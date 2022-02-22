import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './index.css';
import pokemonReducer from "./redux/reducers";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import { logActions } from './redux/middlewares';

const composedEnhancer = compose(
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    applyMiddleware(logActions)
)

const store = createStore(
    pokemonReducer, composedEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
