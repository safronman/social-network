import {connect} from "react-redux";
import {
    getUsersThunkCreator,
    setStatusActionCreator,
    setUsersActionCreator
} from "../../redux/reducers/usersPageReducer";
import React from "react";
import {statuses} from "../../redux/requestStatuses";
import Users from "./Users";

let UsersContainer = class extends React.Component {
    constructor(props) {
        super(props);

        this.setStatus = this.props.setStatus;
        this.setUsers = this.props.setUsers;
        this.getUsers = this.props.getUsers;

        this.status = this.props.usersPage.status;
        this.users = this.props.usersPage.users;
    }

    render() {
        // if (this.users.length === 0) {
        //     return <div>users not found</div>
        // } else {
        //     return <Users {...this.props}/>
        // }

        return <Users {...this.props}/>
    }

    componentDidMount() {
        // debugger
        if (this.status === statuses.STATUS_NOT_INITIALIZED) {
            this.getUsers();
        }

    }
};

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        // setStatus: (status) => {
        //     dispatch(setStatusActionCreator(status))
        // },
        // setUsers: (users) => {
        //     dispatch(setUsersActionCreator(users))
        // },
        getUsers: () => {
            dispatch(getUsersThunkCreator());
        }
    }
};

UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersContainer;