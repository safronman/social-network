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
            return {
                ...state,
                currentMessage: action.message
            };

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 4,
                    message: action.message,
                    likes: 0
                }],
                currentMessage: ''
            };

        case TOGGLE_FULL_INFO:
            return {
                ...state,
                enableFullInfoBtn: !state.enableFullInfoBtn
            };

        default:
            return state;
    }
};

// Action Creators
export const addCurrentMessageActionCreator = (message) => ({type: ADD_CURRENT_MESSAGE, message});
export const addPostActionCreator = (message) => ({type: ADD_POST, message});
export const toggleFullInfoActionCreator = () => ({type: TOGGLE_FULL_INFO});

export default profilePageReducer;