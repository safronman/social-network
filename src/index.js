import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addCurrentMessageInState, addPostInState, toggleFullInfo} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let addCurrentMessageOnPage = (message) => {
    addCurrentMessageInState(message);
    renderPage();
};

let addPostOnPage = (message) => {
    addPostInState(message);
    renderPage();
};

let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addCurrentMessageOnPage={addCurrentMessageOnPage}
                 addPostOnPage={addPostOnPage}
                 toggleFullInfo={toggleFullInfo}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderPage();

export default renderPage;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();