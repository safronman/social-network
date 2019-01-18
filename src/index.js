import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let fullInfoEnable = false;

let toggleFullInfo = () => {
    fullInfoEnable =!fullInfoEnable;
    renderPage();
}

let renderPage = () => {
    ReactDOM.render(<App toggleFullInfo={toggleFullInfo}
                         fullInfoEnable={fullInfoEnable}/>,
        document.getElementById('root'));
};

renderPage();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
