import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PropTypes from "prop-types";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="sidebar">
                <Navbar/>
                <UsersContainer/>
            </div>
            <div className="app-wrapper__content">
                <Route exact path='/'
                       render={() => <ProfileContainer/>}/>
                <Route path='/messages'
                       render={() => <MessagesContainer/>}/>
                <Route path='/login'
                       render={() => <LoginContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
};

App.propTypes = {
    store: PropTypes.shape({
        state: PropTypes.shape({
            profilePage: PropTypes.object,
            dialogsPage: PropTypes.object,
            usersPage: PropTypes.object,
            loginPage: PropTypes.object,
            authPage: PropTypes.object
        })
    })
};

export default App;
