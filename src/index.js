import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {applyMiddleware, combineReducers, createStore} from "redux";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import profilePageReducer from "./redux/reducers/profilePageReducer";
import usersPageReducer from "./redux/reducers/usersPageReducer";
import loginPageReducer from "./redux/reducers/loginPageReducer";
import authorizationReducer from "./redux/reducers/authorizationReducer";
import userProfileReducer from "./redux/reducers/userProfileReducer";
import dialogsPageReducer from "./redux/reducers/dialogsPageReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import {BrowserRouter} from "react-router-dom";

let combinedReducers = combineReducers({
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    loginPage: loginPageReducer,
    authorization: authorizationReducer,
    userProfile: userProfileReducer,
    dialogsPage: dialogsPageReducer,
    form: formReducer
});

let store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();