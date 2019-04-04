import axiosInstance from "../../dal/axiosInstance";

// Actions
const SET_USER_FULL_NAME = 'social-network/user-profile/SET_USER_FULL_NAME';
const SET_USER_ABOUT_ME = 'social-network/user-profile/SET_USER_ABOUT_ME';
const SET_USER_CONTACTS = 'social-network/user-profile/SET_USER_CONTACTS';
const SET_LOOKING_FOR_A_JOB = 'social-network/user-profile/SET_LOOKING_FOR_A_JOB';
const SET_LOOKING_FOR_A_JOB_DESCRIPTION = 'social-network/user-profile/SET_LOOKING_FOR_A_JOB_DESCRIPTION';


// Initial state
let initialState = {
    fullName: '',
    aboutMe: '',
    contacts: {
        facebook: '',
        github: '',
        instagram: '',
        mainLink: '',
        twitter: '',
        vk: '',
        website: '',
        youtube: ''
    },
    lookingForAJob: false,
    lookingForAJobDescription: ''
};

// Reducer
const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_FULL_NAME:
            return {
                ...state,
                fullName: action.value
            };

        case SET_USER_ABOUT_ME:
            return {
                ...state,
                aboutMe: action.value
            };

        case SET_USER_CONTACTS:
            return {
                ...state,
                contacts: action.value
            };

        case SET_LOOKING_FOR_A_JOB:
            return {
                ...state,
                lookingForAJob: action.value
            };

        case SET_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
                ...state,
                lookingForAJobDescription: action.value
            };

        default:
            return state;
    }
};

// Action Creators
export const setUserFullNameAC = (value) => ({type: SET_USER_FULL_NAME, value});
export const setUserAboutMeAC = (value) => ({type: SET_USER_ABOUT_ME, value});
export const setUserContactsAC = (value) => ({type: SET_USER_CONTACTS, value});
export const setUserLookingForAJobAC = (value) => ({type: SET_LOOKING_FOR_A_JOB, value});
export const setUserLookingForAJobDescriptionAC = (value) => ({type: SET_LOOKING_FOR_A_JOB_DESCRIPTION, value});


//Thunk Creators
export let getUserProfileTC = (id) => (dispatch) => {
    axiosInstance.get(`profile/${id}`)
        .then((response) => {
            dispatch(setUserFullNameAC(response.data.fullName));
            dispatch(setUserAboutMeAC(response.data.aboutMe));
            dispatch(setUserContactsAC(response.data.contacts));
            dispatch(setUserLookingForAJobAC(response.data.lookingForAJob));
            dispatch(setUserLookingForAJobDescriptionAC(response.data.lookingForAJobDescription));
        })
};

export default userProfileReducer;