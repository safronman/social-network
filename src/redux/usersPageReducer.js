import {statuses} from "./requestStatuses";

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
export default usersPageReducer;