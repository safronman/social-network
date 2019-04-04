import {statuses} from "../requestStatuses";
import axiosInstance from "./../../dal/axiosInstance";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Actions
const SET_STATUS = 'social-network/users-page/SET_STATUS';
const SET_USERS = 'social-network/users-page/SET_USERS';
const SET_CURRENT_USER_ID = 'social-network/users-page/SET_CURRENT_USER_ID';
const SUBSCRIBE = 'social-network/users-page/SUBSCRIBE';
const UNSUBSCRIBE = 'social-network/users-page/UNSUBSCRIBE';


// Initial state
let initialState = {
    status: statuses.STATUS_NOT_INITIALIZED,
    users: [],
    currentUserId: null
};


// Reducer
const usersPageReducer = (state = initialState, action) => {
    let newState;
    let subscribedUser;

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

        // case SET_USERS:
        //     debugger
        //     action.users.forEach((item) => {
        //         state.users[item.id] = item;
        //     });
        //
        //     return {
        //         ...state,
        //         users: state.users
        //     };

        case SET_CURRENT_USER_ID:
            return {
                ...state,
                currentUserId: action.id
            };


        case SUBSCRIBE:
            newState = {...state, users: [...state.users]};
            subscribedUser = newState.users.filter(item => {
                return item.id === action.id;
            })[0];
            subscribedUser.followed = true;

            return newState;


        case UNSUBSCRIBE:
            newState = {...state, users: [...state.users]};
            subscribedUser = newState.users.filter(item => {
                return item.id === action.id;
            })[0];
            subscribedUser.followed = false;

            return newState;


        default:
            return state;
    }
};

// Action Creators
export const setStatusAC = status => ({type: SET_STATUS, status});
export const setUsersAC = users => ({type: SET_USERS, users});
export const setCurrentUserIdAC = id => ({type: SET_CURRENT_USER_ID, id});
export const subscribeAC = id => ({type: SUBSCRIBE, id});
export const unSubscribeAC = id => ({type: UNSUBSCRIBE, id});


// Thunk Creators
export let getUsersTC = () => (dispatch) => {
    dispatch(setStatusAC(statuses.STATUS_IN_PROGRESS));
    axiosInstance.get('users?count=20')
        .then((response) => {
            dispatch(setUsersAC(response.data.items));
            dispatch(setStatusAC(statuses.STATUS_SUCCESS));
        })
};

export let addToFriendsTC = (id) => (dispatch) => {
    dispatch(setStatusAC(statuses.STATUS_IN_PROGRESS));
    axiosInstance.post(`follow/${id}`)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(statuses.STATUS_SUCCESS));
                dispatch(subscribeAC(id));
            } else {
                dispatch(setStatusAC(statuses.STATUS_ERROR));
                MySwal.fire({
                    type: 'error',
                    text: response.data.messages[0]
                })
            }
        })
        .catch((response) => {
            MySwal.fire({
                type: 'error',
                text: response.response.data.message
            })
        })
};

export let removeFromFriendsTC = (id) => (dispatch) => {
    dispatch(setStatusAC(statuses.STATUS_IN_PROGRESS));
    axiosInstance.delete(`follow/${id}`)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(statuses.STATUS_SUCCESS));
                dispatch(unSubscribeAC(id));
            } else {
                dispatch(setStatusAC(statuses.STATUS_ERROR));
                MySwal.fire({
                    type: 'error',
                    text: response.data.messages[0]
                })
            }
        })
        .catch((response) => {
            MySwal.fire({
                type: 'error',
                text: response.response.data.message
            })
        })
};


// Selectors
// export let usersSelector = (state) => {
//     // debugger
//     let users = state.usersPage.users;
//
//     let usersAsArray = Object.keys(users).map((key) => {
//         return users[key]
//     });
//
//     return usersAsArray;
// };

export default usersPageReducer;