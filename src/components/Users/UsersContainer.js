import {connect} from "react-redux";
import {
    addToFriendsTC,
    getUsersTC,
    removeFromFriendsTC,
    usersSelector
} from "../../redux/reducers/usersPageReducer";
import React from "react";
import {statuses} from "../../redux/requestStatuses";
import Users from "./Users";

let UsersContainer = class extends React.Component {
    componentDidMount() {
        if (this.props.status === statuses.STATUS_NOT_INITIALIZED) {
            this.props.getUsers();
        }
    }

    render() {
        return <Users {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        status: state.usersPage.status,
        users: usersSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersTC());
        },
        addToFriends: (userId) => {
            dispatch(addToFriendsTC(userId));
        },
        removeFromFriends: (userId) => {
            dispatch(removeFromFriendsTC(userId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);