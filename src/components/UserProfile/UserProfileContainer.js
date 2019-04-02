import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import UserProfile from "./UserProfile";
import React from "react";
import {
    getUserProfileTC,
    saveUserProfileAC,
    toggleEditModeAC
} from "../../redux/reducers/userProfileReducer";
import {setCurrentUserIdAC} from "../../redux/reducers/usersPageReducer";


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
        authorization: state.authorization,
        currentUserId: state.usersPage.currentUserId
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (id) => {
            dispatch(getUserProfileTC(id));
        },
        editMode: () => {
            dispatch(toggleEditModeAC());
        },
        saveUserProfile: (profile) => {
            dispatch(saveUserProfileAC(profile));
        },
        setCurrentUserId: (id) => {
            dispatch(setCurrentUserIdAC(id));
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer));