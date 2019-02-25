import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import PropTypes from "prop-types";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import MessagesContainer from "./Components/Messages/MessagesContainer";

const App = () => {
    // debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="sidebar">
                <Navbar/>
                <FriendsContainer />
            </div>
            <div className="app-wrapper__content">
                <Route exact path='/'
                       render={() => <ProfileContainer/>}/>
                <Route path='/messages'
                       render={() => <MessagesContainer/>}/>
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
            sidebar: PropTypes.object
        })
    })
};

export default App;
