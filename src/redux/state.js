import avatar from '../img/avatar.png';
import avatar1 from '../img/avatar-1.svg';
import avatar2 from '../img/avatar-2.svg';
import avatar3 from '../img/avatar-3.svg';
import avatar4 from '../img/avatar-4.svg';
import avatar5 from '../img/avatar-5.svg';
import avatar6 from '../img/avatar-6.svg';
import avatar7 from '../img/avatar-7.svg';
import avatar8 from '../img/avatar-8.svg';
import avatar9 from '../img/avatar-9.svg';

let store = {
    _state: {
        profilePage: {
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
            enableFullInfoBtn: false,
            currentMessage: ''
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Svetlana", img: avatar4},
                {id: 2, name: "Pavel", img: avatar5},
                {id: 3, name: "Alexander", img: avatar6},
                {id: 4, name: "Alexey", img: avatar7},
                {id: 5, name: "Yana", img: avatar8},
                {id: 6, name: "Andrey", img: avatar9}
            ]
        }
    },
    addCurrentMessageToProfilePage(message) {
        this._state.profilePage.currentMessage = message;
        this._callback();
    },
    addPostToProfilePage(message) {
        let newPost = {
            id: 4,
            message: message,
            likes: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.currentMessage = '';
        this._callback();
    },
    addCurrentMessageToMessagesPage(text) {
        this._state.messagesPage.currentMessage = text;
        this._callback();
    },
    addMessageToMessagesPage(text) {
        let newMessage = {
            messageId: 5,
            author: {
                authorId: 1,
                name: 'Margarita',
                avatar: avatar,
            },
            content: text
        };
        this._state.messagesPage.chats[0].messages.push(newMessage);
        this._state.messagesPage.currentMessage = '';
        this._callback();
    },
    toggleFullInfoOnProfilePage() {
        this._state.profilePage.enableFullInfoBtn = !this._state.profilePage.enableFullInfoBtn;
        this._callback();
    },
    getState() {
        return this._state;
    },
    _callback() {
    },
    subscribe(func) {
        this._callback = func;
    }
};

export default store;