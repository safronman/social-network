import avatar4 from "../img/avatar-4.svg";
import avatar5 from "../img/avatar-5.svg";
import avatar6 from "../img/avatar-6.svg";
import avatar7 from "../img/avatar-7.svg";
import avatar8 from "../img/avatar-8.svg";
import avatar9 from "../img/avatar-9.svg";

let initialState = {
    friends: [
        {id: 1, name: "Svetlana", img: avatar4},
        {id: 2, name: "Pavel", img: avatar5},
        {id: 3, name: "Alexander", img: avatar6},
        {id: 4, name: "Alexey", img: avatar7},
        {id: 5, name: "Yana", img: avatar8},
        {id: 6, name: "Andrey", img: avatar9}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default sidebarReducer;