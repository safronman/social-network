import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="sidebar">
                <Navbar/>
                <UsersContainer/>
            </div>
            <div className="app-wrapper__content">
                <Route exact path='/' component={LoginContainer}/>
                <Route path='/profile' component={ProfileContainer}/>
                <Route path='/messages' component={MessagesContainer}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users/:userId?' component={UserProfileContainer}/>
            </div>
        </div>
    );
};

export default App;
