import axiosInstance from "../../dal/axiosInstance";

// Actions
const ADD_CURRENT_MESSAGE = 'social-network/profile-page/ADD_CURRENT_MESSAGE';
const ADD_POST = 'social-network/profile-page/ADD_POST';
const TOGGLE_EDIT_MODE = 'social-network/profile-page/TOGGLE_EDIT_MODE';
const SET_OWNER_ID = 'social-network/profile-page/SET_OWNER_ID';
const SET_OWNER_FULL_NAME = 'social-network/profile-page/SET_OWNER_FULL_NAME';
const SET_OWNER_ABOUT_ME = 'social-network/profile-page/SET_OWNER_ABOUT_ME';
const SET_OWNER_CONTACTS = 'social-network/profile-page/SET_OWNER_CONTACTS';
const SET_OWNER_LOOKING_FOR_A_JOB = 'social-network/profile-page/SET_OWNER_LOOKING_FOR_A_JOB';
const SET_OWNER_LOOKING_FOR_A_JOB_DESCRIPTION = 'social-network/profile-page/SET_OWNER_LOOKING_FOR_A_JOB_DESCRIPTION';
const SET_NEW_CONTACTS_VALUE = 'social-network/profile-page/SET_NEW_CONTACTS_VALUE';


// Initial state
let initialState = {
    postsData: [
        {
            id: 1,
            message: "Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Товарищи! сложившаяся структура организации требуют определения и уточнения существенных финансовых и административных условий. Товарищи! новая модель организационной деятельности в значительной степени обуславливает создание форм развития.",
            likes: 125
        },
        {
            id: 2,
            message: "Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании новых предложений.",
            likes: 232
        }
    ],
    currentMessage: '',
    editMode: false,
    ownerId: null,
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
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_MESSAGE:
            return {
                ...state,
                currentMessage: action.message
            };

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 4,
                    message: action.message,
                    likes: 0
                }],
                currentMessage: ''
            };

        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                editMode: !state.editMode
            };

        case SET_OWNER_ID:
            return {
                ...state,
                ownerId: action.id
            };

        case SET_OWNER_FULL_NAME:
            return {
                ...state,
                fullName: action.value
            };

        case SET_OWNER_ABOUT_ME:
            return {
                ...state,
                aboutMe: action.value
            };

        case SET_OWNER_CONTACTS:
            return {
                ...state,
                contacts: action.value
            };

        case SET_NEW_CONTACTS_VALUE:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    [action.item] : action.value
                }
            };

        case SET_OWNER_LOOKING_FOR_A_JOB:
            return {
                ...state,
                lookingForAJob: action.value
            };

        case SET_OWNER_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
                ...state,
                lookingForAJobDescription: action.value
            };

        default:
            return state;
    }
};


// Action Creators
export const addCurrentMessageActionCreator = (message) => ({type: ADD_CURRENT_MESSAGE, message});
export const addPostActionCreator = (message) => ({type: ADD_POST, message});
export const toggleEditModeAC = () => ({type: TOGGLE_EDIT_MODE});
export const setOwnerIdAC = (id) => ({type: SET_OWNER_ID, id});
export const setOwnerFullNameAC = (value) => ({type: SET_OWNER_FULL_NAME, value});
export const setOwnerAboutMeAC = (value) => ({type: SET_OWNER_ABOUT_ME, value});
export const setOwnerContactsAC = (value) => ({type: SET_OWNER_CONTACTS, value});
export const setOwnerLookingForAJobAC = (value) => ({type: SET_OWNER_LOOKING_FOR_A_JOB, value});
export const setOwnerLookingForAJobDescriptionAC = (value) => ({type: SET_OWNER_LOOKING_FOR_A_JOB_DESCRIPTION, value});
export const setNewContactsValueAC = (value, item) => ({type: SET_NEW_CONTACTS_VALUE, value, item});


//Thunk Creators
export let getMyProfileTC = (id) => (dispatch) => {
    axiosInstance.get(`profile/${id}`)
        .then((response) => {
            dispatch(setOwnerFullNameAC(response.data.fullName));
            dispatch(setOwnerAboutMeAC(response.data.aboutMe));
            dispatch(setOwnerContactsAC(response.data.contacts));
            dispatch(setOwnerLookingForAJobAC(response.data.lookingForAJob));
            dispatch(setOwnerLookingForAJobDescriptionAC(response.data.lookingForAJobDescription));
        })
};

export let saveProfileTC = (profile) => (dispatch) => {
    axiosInstance.put('profile', {
        fullName: profile.fullName,
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
        lookingForAJobDescription: profile.lookingForAJobDescription
    })
};


export default profilePageReducer;