import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getUserProfileTC, saveUserProfileAC} from "../../redux/reducers/userProfileReducer";
import {setCurrentUserIdAC} from "../../redux/reducers/usersPageReducer";
import {toggleEditModeAC} from "../../redux/reducers/profilePageReducer";

let ProfileContainer = class extends React.Component {
    componentDidMount() {
        // debugger
        if (this.props.authorization.isAuth) {
            this.props.getUserProfile(this.props.authorization.userInfo.userId);
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.userId !== prevProps.currentUserId) {
    //         this.props.getUserProfile(this.props.match.params.userId);
    //         this.props.setCurrentUserId(this.props.match.params.userId);
    //     }
    // }

    render() {
        return <Profile {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        authorization: state.authorization,
        userProfile: state.userProfile
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);