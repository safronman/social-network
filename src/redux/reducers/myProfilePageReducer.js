import axiosInstance from "../../dal/axiosInstance";

// Actions
const SET_FULL_NAME = 'social-network/my-profile-page/SET_FULL_NAME';
const SET_ABOUT_ME = 'social-network/my-profile-page/SET_ABOUT_ME';
const SET_CONTACTS = 'social-network/my-profile-page/SET_CONTACTS';
const SET_CONTACTS_VALUE = 'social-network/my-profile-page/SET_CONTACTS_VALUE';
const SET_LOOKING_FOR_A_JOB_DESC = 'social-network/my-profile-page/SET_LOOKING_FOR_A_JOB_DESC';
const TOGGLE_LOOKING_FOR_A_JOB = 'social-network/my-profile-page/TOGGLE_LOOKING_FOR_A_JOB';
const SET_LOOKING_FOR_A_JOB = 'social-network/my-profile-page/SET_LOOKING_FOR_A_JOB';
const TOGGLE_EDIT_MODE = 'social-network/my-profile-page/TOGGLE_EDIT_MODE';


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
    lookingForAJobDescription: '',
    editMode: false
};


// Reducer
const myProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FULL_NAME:
            return {
                ...state,
                fullName: action.value
            };

        case SET_ABOUT_ME:
            return {
                ...state,
                aboutMe: action.value
            };

        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.value
            };

        case SET_CONTACTS_VALUE:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    facebook: action.value,
                    github: action.value,
                    instagram: action.value,
                    mainLink: action.value,
                    twitter: action.value,
                    vk: action.value,
                    website: action.value,
                    youtube: action.value
                }
            };

        case SET_LOOKING_FOR_A_JOB_DESC:
            return {
                ...state,
                lookingForAJobDescription: action.value
            };

        case TOGGLE_LOOKING_FOR_A_JOB:
            return {
                ...state,
                lookingForAJob: !state.lookingForAJob
            };

        case SET_LOOKING_FOR_A_JOB:
            return {
                ...state,
                lookingForAJob: action.value
            };

        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                editMode: !state.editMode
            };

        default:
            return state;
    }
};


// Action Creators
export const setFullNameAC = (value) => {
    return {
        type: SET_FULL_NAME,
        value
    };
};

export const setAboutMeAC = (value) => {
    return {
        type: SET_ABOUT_ME,
        value
    };
};

export const setContactsAC = (value) => {
    return {
        type: SET_CONTACTS,
        value
    };
};

export const setContactsValueAC = (value) => {
    return {
        type: SET_CONTACTS_VALUE,
        value
    };
};

export const setLookingForAJobDescriptionAC = (value) => {
    return {
        type: SET_LOOKING_FOR_A_JOB_DESC,
        value
    };
};

export const toggleLookingForAJobChangeValueAC = () => {
    return {
        type: TOGGLE_LOOKING_FOR_A_JOB
    };
};

export const setLookingForAJobAC = (value) => {
    return {
        type: SET_LOOKING_FOR_A_JOB,
        value
    };
};

export const toggleEditModeAC = () => {
    return {
        type: TOGGLE_EDIT_MODE
    };
};


//Thunk Creators
export let getProfileTC = () => {
    return (dispatch) => {
        axiosInstance.get('profile/26')
            .then((response) => {
                // debugger
                dispatch(setFullNameAC(response.data.fullName));
                dispatch(setAboutMeAC(response.data.aboutMe));
                dispatch(setContactsAC(response.data.contacts));
                dispatch(setLookingForAJobAC(response.data.lookingForAJob));
                dispatch(setLookingForAJobDescriptionAC(response.data.lookingForAJobDescription));
            })
    }
};

export let saveMyProfileTC = (profile) => {
    return (dispatch) => {
        axiosInstance.put('profile', {
            aboutMe: profile.aboutMe,
            contacts: {
                facebook: profile.contacts.facebook,
                github: profile.contacts.github,
                instagram: profile.contacts.instagram,
                mainLink: profile.contacts.mainLink,
                twitter: profile.contacts.twitter,
                vk: profile.contacts.vk,
                website: profile.contacts.website,
                youtube: profile.contacts.youtube
            },
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName
        })
    }
};

export default myProfilePageReducer;