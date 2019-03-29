import {statuses} from "../requestStatuses";
import axiosInstance from "./../../dal/axiosInstance";


// Actions
const SET_STATUS = 'social-network/users-page/SET_STATUS';
const SET_USERS = 'social-network/users-page/SET_USERS';
const SET_CURRENT_USER_ID = 'social-network/users-page/SET_CURRENT_USER_ID';


// Initial state
let initialState = {
    status: statuses.STATUS_NOT_INITIALIZED,
    users: {},
    currentUserId: null
};


// Reducer
const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        // case SET_USERS:
        //     return {
        //         ...state,
        //         users: action.users
        //     };

        case SET_USERS:
            // debugger
            action.users.forEach((item) => {
                state.users[item.id] = item;
            });

            return {
                ...state,
                users: state.users
            };

        case SET_CURRENT_USER_ID:
            return {
                ...state,
                currentUserId: action.id
            };

        default:
            return state;
    }
};

// Action Creators
export const setStatusAC = status => ({type: SET_STATUS, status});
export const setUsersAC = users => ({type: SET_USERS, users});
export const setCurrentUserIdAC = id => ({type: SET_CURRENT_USER_ID, id});

// Thunk Creators
export let getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(setStatusAC(statuses.STATUS_IN_PROGRESS));
        axiosInstance.get('users?count=30')
            .then((response) => {
                // debugger
                dispatch(setUsersAC(response.data.items));
                dispatch(setStatusAC(statuses.STATUS_SUCCESS));
            })
    }
};


// Selectors
export let usersSelector = (state) => {
    // debugger
    let users = state.usersPage.users;

    let usersAsArray = Object.keys(users).map((key) => {
        return users[key]
    });

    return usersAsArray;
};

export default usersPageReducer;