import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// Add post to Profile Page
// let addCurrentMessageOnProfilePage = (message) => {
//     store.addCurrentMessageInProfilePageState(message);
//     renderPage();
// };

let addPostOnProfilePage = (message) => {
    store.addPostInProfilePageState(message);
    renderPage();
};


// Add message to Messages Page
let addCurrentMessageOnMessagesPage = (text) => {
    store.addCurrentMessageInMessagesPageState(text);
    renderPage();
};

let addMessageOnMessagesPage = (message) => {
    store.addMessageInMessagesPageState(message);
    renderPage();
};


// Show and hide full information on Profile Page
let toggleFullInfo = () => {
    store.toggleFullInfoInState();
    renderPage();
};


let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 toggleFullInfo={toggleFullInfo}
                 addCurrentMessageOnProfilePage={addCurrentMessageOnProfilePage}
                 addCurrentMessageOnMessagesPage={addCurrentMessageOnMessagesPage}
                 addPostOnProfilePage={addPostOnProfilePage}
                 addMessageOnMessagesPage={addMessageOnMessagesPage}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderPage();

export default renderPage;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();