import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

class App extends Component {

    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Profile />
            </div>
        );
    }
}

export default App;
