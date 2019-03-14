import {connect} from "react-redux";
import {getUsersThunkCreator} from "../../redux/reducers/usersPageReducer";
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
        getUsers: () => {
            dispatch(getUsersThunkCreator());
        }
    }
};

UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersContainer;