import avatar from "../img/avatar.png";
import avatar1 from "../img/avatar-1.svg";
import avatar2 from "../img/avatar-2.svg";
import avatar3 from "../img/avatar-3.svg";

// Actions
const ADD_CURRENT_MESSAGE = 'social-network/messages-page/ADD_CURRENT_MESSAGE';
const ADD_MESSAGE = 'social-network/messages-page/ADD_MESSAGE';


// Initial state
let initialState = {
    currentMessage: '',
    chats: [
        {
            chatsId: 1,
            name: 'Mikhail',
            avatar: avatar1,
            messages: [
                {
                    messageId: 1,
                    author: {
                        authorId: 1,
                        name: 'Margarita',
                        avatar: avatar,
                    },
                    content: 'Good morning'
                },
                {
                    messageId: 2,
                    author: {
                        authorId: 2,
                        name: 'Mikhail',
                        avatar: avatar1,
                    },
                    content: 'Hello'
                },
                {
                    messageId: 3,
                    author: {
                        authorId: 1,
                        name: 'Margarita',
                        avatar: avatar,
                    },
                    content: 'How are you?'
                },
                {
                    messageId: 4,
                    author: {
                        authorId: 2,
                        name: 'Mikhail',
                        avatar: avatar1,
                    },
                    content: 'I am fine, thanks'
                }
            ],
        },
        {
            chatsId: 2,
            name: 'Anastasia',
            avatar: avatar2,
            messages: []
        },
        {
            chatsId: 3,
            name: 'Dmitry',
            avatar: avatar3,
            messages: []
        }
    ]
};


// Reducer
const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CURRENT_MESSAGE:
            // state.currentMessage = action.text;
            // return state;

            return {
                ...state,
                currentMessage: action.text
            };

        case ADD_MESSAGE:
            let newMessage = {
                messageId: 5,
                author: {
                    authorId: 1,
                    name: 'Margarita',
                    avatar: avatar,
                },
                content: action.text
            };

            let newState = {...state};
            newState.chats[0].messages.push(newMessage);
            newState.currentMessage = '';
            return newState;

        default:
            return state;
    }
};

// Action Creators
export const addCurrentMessageActionCreator = (message) => {
    return {
        type: ADD_CURRENT_MESSAGE,
        text: message
    };
};

export const addMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        text: message
    };
};

export default messagesPageReducer;