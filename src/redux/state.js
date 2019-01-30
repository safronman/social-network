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
import renderPage from "../index";

let state = {
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
        enableFullInfoBtn: false
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Mikhail", img: avatar1},
            {id: 2, name: "Anastasia", img: avatar2},
            {id: 3, name: "Dmitry", img: avatar3}
        ],
        myMessages: [
            {id: 1, message: "Good morning", img: avatar},
            {id: 3, message: "How are you?", img: avatar},
        ],
        friendsMessagesData: [
            {id: 2, message: "Hello", img: avatar1},
            {id: 4, message: "I'm fine, thanks", img: avatar1}
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
};

// ACTIONS
// profile actions
export let toggleFullInfo = () => {
    state.profilePage.enableFullInfoBtn = !state.profilePage.enableFullInfoBtn;
    // refresh();
};

export let addPostInState = (message) => {
    let newPost = {
        id: 4,
        message: message,
        likes: 222
    };
    state.profilePage.postsData.push(newPost);
};

export default state;