import {statuses} from "../requestStatuses";
import axiosInstance from "./../../dal/axiosInstance";


// Actions
const SET_STATUS = 'social-network/users-page/SET_STATUS';
const SET_USERS = 'social-network/users-page/SET_USERS';


// Initial state
let initialState = {
    status: statuses.STATUS_NOT_INITIALIZED,
    users: []
};


// Reducer
const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        default:
            return state;
    }
};

// Action Creators
export const setStatusActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status
    };
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

//Thunk Creators
export let getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(setStatusActionCreator(statuses.STATUS_IN_PROGRESS));
        axiosInstance.get('users?count=30')
            .then((response) => {
                dispatch(setUsersActionCreator(response.data.items));
                dispatch(setStatusActionCreator(statuses.STATUS_SUCCESS));
            })
    }
};

export default usersPageReducer;