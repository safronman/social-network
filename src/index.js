import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import profilePageReducer from "./redux/profilePageReducer";
import messagesPageReducer from "./redux/messagesPageReducer";
import sidebarReducer from "./redux/sidebarReducer";
import {Provider} from "react-redux";

let combinedReducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer
});

let store = createStore(combinedReducers);

let renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
};

renderPage(store.getState());

export default renderPage;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();