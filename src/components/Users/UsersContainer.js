import {connect} from "react-redux";
import {getUsersThunkCreator} from "../../redux/reducers/usersPageReducer";
import React from "react";
import {statuses} from "../../redux/requestStatuses";
import Users from "./Users";

let UsersContainer = class extends React.Component {
    render() {
        return <Users {...this.props}/>
    }

    componentDidMount() {
        if (this.props.usersPage.status === statuses.STATUS_NOT_INITIALIZED) {
            this.props.getUsers();
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