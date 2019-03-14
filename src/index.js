import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./redux/reducers/profilePageReducer";
import messagesPageReducer from "./redux/reducers/messagesPageReducer";
import {Provider} from "react-redux";
import usersPageReducer from "./redux/reducers/usersPageReducer";
import thunk from "redux-thunk";
import loginPageReducer from "./redux/reducers/loginPageReducer";
import authorizationReducer from "./redux/reducers/authorizationReducer";


let combinedReducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    loginPage: loginPageReducer,
    authorization: authorizationReducer
});

let store = createStore(combinedReducers, applyMiddleware(thunk));

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