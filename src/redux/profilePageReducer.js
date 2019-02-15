// Actions
const ADD_CURRENT_MESSAGE = 'social-network/profile-page/ADD_CURRENT_MESSAGE';
const ADD_POST = 'social-network/profile-page/ADD_POST';
const TOGGLE_FULL_INFO = 'social-network/profile-page/TOGGLE_FULL_INFO';


// Initial state
let initialState = {
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
    currentMessage: ''
};


// Reducer
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_MESSAGE:
            state.currentMessage = action.message;
            return state;

        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.message,
                likes: 0
            };
            state.postsData.push(newPost);
            state.currentMessage = '';
            return state;

        case TOGGLE_FULL_INFO:
            state.enableFullInfoBtn = !state.enableFullInfoBtn;
            return state;

        default:
            return state;
    }
};

// Action Creators
export const addCurrentMessageActionCreator = (message) => {
    return {
        type: ADD_CURRENT_MESSAGE,
        message: message
    };
};

export const addPostActionCreator = (message) => {
    return {
        type: ADD_POST,
        message: message
    };
};

export const toggleFullInfoActionCreator = () => {
    return {
        type: TOGGLE_FULL_INFO
    };
};

export default profilePageReducer;