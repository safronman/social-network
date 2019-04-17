import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import NotFound from "./components/NotFound/NotFound";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginFormContainer from "./components/LoginForm/LoginFormContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="sidebar">
                <Navbar/>
                <UsersContainer/>
            </div>
            <div className="app-wrapper__content">
                <Switch>
                    <Route exact path='/' render={() => <LoginFormContainer/>}/>
                    <Route path='/profile' component={ProfileContainer}/>
                    <Route path='/users/:userId' component={UserProfileContainer}/>
                    <Route path='/messages' component={MessagesContainer}/>
                    <Route path='/dialogs/:userId?' component={DialogsContainer}/>
                    <Route path='/settings' component={Settings}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
