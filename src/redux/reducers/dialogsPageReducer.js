import {statuses} from "../requestStatuses";
import {
    deleteMessage,
    getDialogs,
    getMessages,
    getNewMessages,
    newMessagesCount,
    sendMessage,
    updateDialogs
} from "../../dal/services";

// Actions
const SET_STATUS = 'social-network/dialogs-page/SET_STATUS';
const SET_DIALOGS = 'social-network/dialogs-page/SET_DIALOGS';
const SET_MESSAGES = 'social-network/dialogs-page/SET_MESSAGES';
const SET_CURRENT_DIALOG_ID = 'social-network/dialogs-page/SET_CURRENT_DIALOG_ID';
const SET_NEW_MESSAGE_TO_COUNTER = 'social-network/dialogs-page/SET_NEW_MESSAGE_TO_COUNTER';
const SET_NEW_MESSAGE_TO_STATE = 'social-network/dialogs-page/SET_NEW_MESSAGE_TO_STATE';
const ADD_NEW_MESSAGE_TO_STATE = 'social-network/dialogs-page/ADD_NEW_MESSAGE_TO_STATE';

// Initial state
let initialState = {
    status: statuses.STATUS_NOT_INITIALIZED,
    dialogs: [],
    currentDialogId: null,
    messages: [],
    unreadMessagesCounter: 0
};


// Selectors
export const dialogsSelector = state => state.dialogsPage.dialogs;
export const currentDialogIdSelector = state => state.dialogsPage.currentDialogId;
export const messagesSelector = state => state.dialogsPage.messages;
export const unreadMessagesCounterSelector = state => state.dialogsPage.unreadMessagesCounter;


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

        case SET_NEW_MESSAGE_TO_COUNTER:
            return {
                ...state,
                unreadMessagesCounter: action.count
            };

        case SET_NEW_MESSAGE_TO_STATE:
            return {
                ...state,
                messages: [...state.messages, ...action.message]
            };

        case ADD_NEW_MESSAGE_TO_STATE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            };

        default:
            return state;
    }
};


// Action Creators
export const setStatusAC = status => ({type: SET_STATUS, status});
export const setDialogsAC = dialogs => ({type: SET_DIALOGS, dialogs});
export const setMessagesAC = messages => ({type: SET_MESSAGES, messages});
export const setCurrentDialogIdAC = id => ({type: SET_CURRENT_DIALOG_ID, id});
export const setNewMessageToUnreadCounterAC = count => ({type: SET_NEW_MESSAGE_TO_COUNTER, count});
export const setNewMessagesToStateAC = message => ({type: SET_NEW_MESSAGE_TO_STATE, message});
export const addNewMessageToState = message => ({type: ADD_NEW_MESSAGE_TO_STATE, message});


// Thunk Creators
export const initialRequestsTC = (userId) => (dispatch) => {
    updateDialogs(userId)
        .then((res) => {
            dispatch(setCurrentDialogIdAC(String(userId)))
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
        .then((res) => {
            dispatch(addNewMessageToState(res.data.message))
        })
};


export let deleteMessageTC = (messageId, userId) => (dispatch) => {
    deleteMessage(messageId)
        .then(() => getMessages(userId))
        .then((res) => {
            dispatch(setMessagesAC(res.items));
        })
};

export let newMessagesCountTC = () => (dispatch) => {
    newMessagesCount()
        .then((res) => {
            dispatch(setNewMessageToUnreadCounterAC(res))
        })
};


export const updateUnreadDialogTC = (userId, date) => (dispatch) => {
    updateDialogs(userId)
        .then((res) => {
            dispatch(setCurrentDialogIdAC(userId))
        })
        .then(() => getDialogs())
        .then((res) => dispatch(setDialogsAC(res)))
        .then(() => getNewMessages(userId, date))
        .then((res) => {
            dispatch(setNewMessagesToStateAC(res));
        })
};


export default dialogsPageReducer;