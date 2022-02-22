import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './index.css';
import pokemonReducer from "./redux/reducers";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import { logActions } from './redux/middlewares';
import thunk from "redux-thunk";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhancer = composeAlt(
    applyMiddleware(thunk, logActions)
)

const store = createStore(
    pokemonReducer, composedEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
