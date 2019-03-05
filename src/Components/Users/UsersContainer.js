import Users from "./Users";
import {connect} from "react-redux";
import {setStatusActionCreator, setUsersActionCreator} from "../../redux/usersPageReducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setStatus: (status) => {
            dispatch(setStatusActionCreator(status))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;