import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    // debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profile}
                                                  toggleFullInfo={props.toggleFullInfo}
                                                  addPost={props.addPost}
                                                  changeWritingMessage={props.changeWritingMessage}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogs}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
