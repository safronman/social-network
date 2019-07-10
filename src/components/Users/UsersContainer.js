import {connect} from "react-redux";
import {
    addToFriendsTC, changeCurrentPageAC,
    getUsersTC,
    removeFromFriendsTC,
    statusSelector,
    transformedUsersSelector
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
        status: statusSelector(state),
        users: transformedUsersSelector(state),
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage

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
        },
        changeCurrentPage: (currentPage) => {
            dispatch(changeCurrentPageAC(currentPage));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);