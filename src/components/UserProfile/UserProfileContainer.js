import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import UserProfile from "./UserProfile";
import {getUserProfileTC} from "../../redux/reducers/userProfileReducer";
import {currentUserIdSelector, setCurrentUserIdAC} from "../../redux/reducers/usersPageReducer";


let UserProfileContainer = class extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
        this.props.setCurrentUserId(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.currentUserId) {
            this.props.getUserProfile(this.props.match.params.userId);
            this.props.setCurrentUserId(this.props.match.params.userId);
        }
    }

    render() {
        return <UserProfile {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
        currentUserId: currentUserIdSelector(state)
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (id) => {
            dispatch(getUserProfileTC(id));
        },
        setCurrentUserId: (id) => {
            dispatch(setCurrentUserIdAC(id));
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer));