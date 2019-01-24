import renderPage from "../renderPage";

let state = {
    profilePage: {
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
    dialogsPage: {
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
    },
    sidebar: {
        friends: [
            {id: 1, name: "James"},
            {id: 2, name: "Bill"},
            {id: 3, name: "David"}
        ]
    }
};

// ACTIONS
// profile actions
export let toggleFullInfo = () => {
    state.profilePage.enableFullInfoBtn = !state.profilePage.enableFullInfoBtn;
    renderPage();
};

// dialogs actions
export let changeWritingMessage = (message) => {
    state.profilePage.currentWritingMessage = message;
    renderPage();
};

export let addPost = () => {
    state.profilePage.postsData = [{
        id: 3,
        message: state.profilePage.currentWritingMessage,
        likes: 0
    }, ...state.profilePage.postsData];
    renderPage();
};

export default state;