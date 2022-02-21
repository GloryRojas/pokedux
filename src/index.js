import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './index.css';
import pokemonReducer from "./redux/reducers";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(pokemonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
