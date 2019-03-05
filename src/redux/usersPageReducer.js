// Actions
const SET_STATUS = 'social-network/users-page/SET_STATUS';
const SET_USERS = 'social-network/users-page/SET_USERS';
export const STATUS_NOT_INITIALIZED = 'social-network/users-page/NOT_INITIALIZED';
export const STATUS_ERROR = 'social-network/users-page/ERROR';
export const STATUS_IN_PROGRESS = 'social-network/users-page/IN_PROGRESS';
export const STATUS_SUCCESS = 'social-network/users-page/SUCCESS';


// Initial state
let initialState = {
    status: STATUS_NOT_INITIALIZED,
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
        status //status: status
    };
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users // users : users
    };
};
export default usersPageReducer;