import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

class App extends Component {

    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper__content">
                    <Dialogs />
                    {/*<Profile />*/}
                </div>
            </div>
        );
    }
}

export default App;
