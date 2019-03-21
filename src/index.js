import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import profilePageReducer from "./redux/reducers/profilePageReducer";
import messagesPageReducer from "./redux/reducers/messagesPageReducer";
import usersPageReducer from "./redux/reducers/usersPageReducer";
import loginPageReducer from "./redux/reducers/loginPageReducer";
import authorizationReducer from "./redux/reducers/authorizationReducer";
import myProfilePageReducer from "./redux/reducers/myProfilePageReducer";
import userProfileReducer from "./redux/reducers/userProfileReducer";


let combinedReducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    loginPage: loginPageReducer,
    authorization: authorizationReducer,
    myProfilePage: myProfilePageReducer,
    userProfile: userProfileReducer
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