import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {
    addCurrentMessageInMessagesPageState,
    addCurrentMessageInProfilePageState,
    addMessageInMessagesPageState,
    addPostInProfilePageState,
    toggleFullInfo
} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// Add post to Profile Page
let addCurrentMessageOnProfilePage = (message) => {
    addCurrentMessageInProfilePageState(message);
    renderPage();
};

let addPostOnProfilePage = (message) => {
    addPostInProfilePageState(message);
    renderPage();
};


// Add message to Messages Page
let addCurrentMessageOnMessagesPage = (text) => {
    addCurrentMessageInMessagesPageState(text);
    renderPage();
};

let addMessageOnMessagesPage = (message) => {
    addMessageInMessagesPageState(message);
    renderPage();
};

let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addCurrentMessageOnProfilePage={addCurrentMessageOnProfilePage}
                 addCurrentMessageOnMessagesPage={addCurrentMessageOnMessagesPage}
                 addPostOnProfilePage={addPostOnProfilePage}
                 addMessageOnMessagesPage={addMessageOnMessagesPage}
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