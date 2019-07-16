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
import {withRouter} from "react-router-dom";

let UsersContainer = class extends React.Component {
    componentDidMount() {
        if (this.props.status === statuses.STATUS_NOT_INITIALIZED) {
            this.props.getUsers(this.props.pageSize, this.props.currentPage);
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.currentPage !== nextProps.currentPage) {
            this.props.getUsers(this.props.pageSize, nextProps.currentPage);
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
        getUsers: (pageSize, currentPage) => {
            dispatch(getUsersTC(pageSize, currentPage));
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