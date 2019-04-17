import {statuses} from "../requestStatuses";
import axiosInstance from "../../dal/axiosInstance";
import {authMeTC} from "./authorizationReducer";

// Actions
const SET_STATUS = 'social-network/login-page/SET_STATUS';
const SET_MESSAGE = 'social-network/login-page/SET_MESSAGE';


// Initial state
let initialState = {
    status: statuses.STATUS_NOT_INITIALIZED,
    message: ''
};


// Reducer
const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            };


        default:
            return state;
    }
};

// Action Creators
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const setMessageAC = (message) => ({type: SET_MESSAGE, message});

// Thunk Creators
export let loginTC = (email, password, rememberMe) => (dispatch) => {
    dispatch(setStatusAC(statuses.STATUS_IN_PROGRESS));
    axiosInstance.post('auth/login', {
        email,
        password,
        rememberMe
    })
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(statuses.STATUS_SUCCESS));
                dispatch(authMeTC());
            } else {
                dispatch(setStatusAC(statuses.STATUS_ERROR));
                dispatch(setMessageAC(response.data.messages[0]));
            }
        })
};


export default loginPageReducer;