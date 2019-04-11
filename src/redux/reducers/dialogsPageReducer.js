import {statuses} from "../requestStatuses";
import {getDialogs, getMessages, sendMessage, updateDialogs} from "../../dal/services";

// Actions
const SET_STATUS = 'social-network/dialogs-page/SET_STATUS';
const SET_DIALOGS = 'social-network/dialogs-page/SET_DIALOGS';
const SET_MESSAGES = 'social-network/dialogs-page/SET_MESSAGES';
const SET_CURRENT_DIALOG_ID = 'social-network/dialogs-page/SET_CURRENT_DIALOG_ID';

// Initial state
let initialState = {
    status: statuses.STATUS_NOT_INITIALIZED,
    dialogs: [],
    currentDialogId: null,
    messages: []
};


// Reducer
const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            };

        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };

        case SET_CURRENT_DIALOG_ID:
            return {
                ...state,
                currentDialogId: action.id
            };

        default:
            return state;
    }
};

// Action Creators
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const setDialogsAC = (dialogs) => ({type: SET_DIALOGS, dialogs});
export const setMessagesAC = (messages) => ({type: SET_MESSAGES, messages});
export const setCurrentDialogIdAC = (id) => ({type: SET_CURRENT_DIALOG_ID, id});


// Thunk Creators
export const initialRequestsTC = (userId) => (dispatch) => {
    updateDialogs(userId)
        .then((res) => {
            dispatch(setCurrentDialogIdAC(userId))
        })
        .then(() => getDialogs())
        .then((res) => dispatch(setDialogsAC(res)))
        .then(() => getMessages(userId))
        .then((res) => {
            dispatch(setMessagesAC(res.items));
        })
};

export let getDialogsTC = () => (dispatch) => {
    getDialogs()
        .then(res => {
                dispatch(setDialogsAC(res))
            }
        );
};

export let sendMessageTC = (userId, body) => (dispatch) => {
    sendMessage(userId, body)
        .then(() => getMessages(userId))
        .then((res) => {
            dispatch(setMessagesAC(res.items));
        })
};

export default dialogsPageReducer;