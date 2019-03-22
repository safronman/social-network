import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import UserProfile from "./UserProfile";
import React from "react";
import {getUserProfileTC, saveUserProfileAC, toggleEditModeAC} from "../../redux/reducers/userProfileReducer";


let UserProfileContainer = class extends React.Component {
    render() {
        return <UserProfile {...this.props}/>
    }

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
    }
};


let mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile,
        authorization: state.authorization
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
        }
    }
};


UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);

export default withRouter(UserProfileContainer);