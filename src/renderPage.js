import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addPost, changeWritingMessage, toggleFullInfo} from "./redux/state";

let renderPage = () => {
    ReactDOM.render(<App state={state}
                         toggleFullInfo={toggleFullInfo}
                         addPost={addPost}
                         changeWritingMessage={changeWritingMessage}/>,
        document.getElementById('root'));
};

export default renderPage;