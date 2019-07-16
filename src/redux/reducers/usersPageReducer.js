import {statuses} from "../requestStatuses";
import axiosInstance from "./../../dal/axiosInstance";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Actions
const SET_STATUS = 'social-network/users-page/SET_STATUS';
const SET_USERS = 'social-network/users-page/SET_USERS';
const SET_CURRENT_USER_ID = 'social-network/users-page/SET_CURRENT_USER_ID';
const SUBSCRIBE = 'social-network/users-page/SUBSCRIBE';
const UNSUBSCRIBE = 'social-network/users-page/UNSUBSCRIBE';
const SET_USERS_TOTAL_COUNT = 'social-network/users-page/SET_USERS_TOTAL_COUNT';
const CHANGE_CURRENT_PAGE = 'social-network/users-page/CHANGE_CURRENT_PAGE';


// Initial state
let initialState = {
    status: statuses.STATUS_NOT_INITIALIZED,
    users: {},
    currentUserId: null,
    totalCount: 0,
    currentPage: 1,
    pageSize: 9
};

// Selectors
export const statusSelector = state => state.usersPage.status;
export const currentUserIdSelector = state => state.usersPage.currentUserId;
export const usersSelector = state => state.usersPage.users;

export const transformedUsersSelector = (state) => {
    let users = usersSelector(state);
    // transform object users in array
    return Object.keys(users).map(key => users[key]);
};


// Reducer
const usersPageReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_USERS:
            // transform array from Server in object
            action.users.forEach((item) => {
                state.users[item.id] = item;
            });

            return {
                ...state,
                users: action.users
            };

        case SET_CURRENT_USER_ID:
            return {
                ...state,
                currentUserId: action.id
            };

        case SUBSCRIBE:
            newState = {...state, users: {...state.users}};
            newState.users[action.id].followed = true;
            return newState;


        case UNSUBSCRIBE:
            newState = {...state, users: {...state.users}};
            newState.users[action.id].followed = false;
            return newState;

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            };

        case CHANGE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };

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
export const setUsersTotalCount = totalCount => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const changeCurrentPageAC = currentPage => ({type: CHANGE_CURRENT_PAGE, currentPage});



// Thunk Creators
export let getUsersTC = (pageSize, currentPage) => (dispatch) => {
    dispatch(setStatusAC(statuses.STATUS_IN_PROGRESS));
    axiosInstance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then((response) => {
            dispatch(setUsersAC(response.data.items));
            dispatch(setStatusAC(statuses.STATUS_SUCCESS));
            dispatch(setUsersTotalCount(response.data.totalCount));
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

export default usersPageReducer;