import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// STATE
let state = {
    profile: {
        postsData: [
            {
                id: 1,
                message: "Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Товарищи! сложившаяся структура организации требуют определения и уточнения существенных финансовых и административных условий. Товарищи! новая модель организационной деятельности в значительной степени обуславливает создание форм развития.",
                likes: 125
            },
            {
                id: 2,
                message: "Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений.",
                likes: 232
            }
        ],
        enableFullInfoBtn: false,
        currentWritingMessage: ''
    },
    dialogs: {
        dialogsData: [
            {id: 1, name: "James"},
            {id: 2, name: "Bill"},
            {id: 3, name: "David"}
        ],
        messagesData: [
            {id: 1, message: "Good morning"},
            {id: 2, message: "Hello"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "I'm fine, thanks"}
        ]
    }
};


// ACTIONS
// profile actions
let toggleFullInfo = () => {
    state.profile.enableFullInfoBtn = !state.profile.enableFullInfoBtn;
    renderPage();
};

// dialogs actions
let changeWritingMessage = (message) => {
    state.profile.currentWritingMessage = message;
    renderPage();
};

let addPost = () => {
    state.profile.postsData = [{
        id: 3,
        message: state.profile.currentWritingMessage,
        likes: 0
    }, ...state.profile.postsData];
    renderPage();
};

// RENDER
let renderPage = () => {
    ReactDOM.render(<App state={state}
                         toggleFullInfo={toggleFullInfo}
                         addPost={addPost}
                         changeWritingMessage={changeWritingMessage}/>,
        document.getElementById('root'));
};

renderPage();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
