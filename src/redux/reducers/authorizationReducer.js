import axiosInstance from "../../dal/axiosInstance";

// Actions
const SET_IS_AUTH = 'social-network/auth-page/SET_IS_AUTH';
const SET_USER_NAME = 'social-network/auth-page/SET_USER_NAME';

// Initial state
let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        avatarUrl: ''
    }
};

// Reducer
const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.value
            };

        case SET_USER_NAME:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userName: action.login
                }
            };

        default:
            return state;
    }
};

// Action Creators
export const setAuthActionCreator = (value) => {
    return {
        type: SET_IS_AUTH,
        value
    };
};

export const setUserNameActionCreator = (login) => {
    return {
        type: SET_USER_NAME,
        login
    };
};


//Thunk Creators
export let authMeThunkCreator = () => {
    return (dispatch) => {
        axiosInstance.get('auth/me')
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthActionCreator(true));
                    dispatch(setUserNameActionCreator(response.data.data.login));
                }
            })
    }
};

export let logOutThunkCreator = () => {
    return (dispatch) => {
        axiosInstance.post('auth/logout')
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthActionCreator(false));
                    dispatch(setUserNameActionCreator(null));
                }
            })
    }
};

export default authorizationReducer;