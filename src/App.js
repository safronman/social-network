import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import Messages from "./Components/Messages/Messages";
import PropTypes from "prop-types";


const App = ({state: {profilePage, messagesPage, sidebar}, store}) => {
    // debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="sidebar">
                <Navbar/>
                <Friends sidebar={sidebar}/>
            </div>
            <div className="app-wrapper__content">
                <Route exact path='/'
                       render={() => <Profile profilePage={profilePage} store={store}/>}/>
                <Route path='/messages'
                       render={() => <Messages messagesPage={messagesPage} store={store}/>}/>
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
