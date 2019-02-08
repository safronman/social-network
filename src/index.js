import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={store.getState()}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderPage();

store.subscribe(() => {
    renderPage();
});

export default renderPage;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();