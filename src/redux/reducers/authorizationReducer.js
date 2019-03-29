import axiosInstance from "../../dal/axiosInstance";

// Actions
const SET_IS_AUTH = 'social-network/auth-page/SET_IS_AUTH';
const SET_USER_NAME = 'social-network/auth-page/SET_USER_NAME';
const SET_USER_ID = 'social-network/auth-page/SET_USER_ID';

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

        case SET_USER_ID:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.id
                }
            };

        default:
            return state;
    }
};

// Action Creators
export const setAuthAC = (value) => ({type: SET_IS_AUTH, value});
export const setUserNameAC = (login) => ({type: SET_USER_NAME, login});
export const setUserIdAC = (id) => ({type: SET_USER_ID, id});


// Thunk Creators
export let authMeTC = () => (dispatch) => {
    axiosInstance.get('auth/me')
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserIdAC(response.data.data.id));
                dispatch(setUserNameAC(response.data.data.login));
                dispatch(setAuthAC(true));
            }
        })
};


export let logOutTC = () => (dispatch) => {
    axiosInstance.post('auth/logout')
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserIdAC(null));
                dispatch(setUserNameAC(null));
                dispatch(setAuthAC(false));
            }
        })
};

export default authorizationReducer;