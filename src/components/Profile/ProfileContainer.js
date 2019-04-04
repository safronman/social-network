import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getMyProfileTC, saveProfileTC, setOwnerIdAC, toggleEditModeAC} from "../../redux/reducers/profilePageReducer";

let ProfileContainer = class extends React.Component {
    componentDidMount() {
        if (this.props.authorization.isAuth) {
            this.props.getMyProfile(this.props.authorization.userInfo.userId);
            this.props.setOwnerId(this.props.authorization.userInfo.userId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.authorization.userInfo.userId !== prevProps.profilePage.ownerId) {
            this.props.getMyProfile(this.props.authorization.userInfo.userId);
            this.props.setOwnerId(this.props.authorization.userInfo.userId);
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        authorization: state.authorization
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getMyProfile: (id) => {
            dispatch(getMyProfileTC(id));
        },
        editMode: () => {
            dispatch(toggleEditModeAC());
        },
        saveProfile: (profile) => {
            dispatch(saveProfileTC(profile));
        },
        setOwnerId: (id) => {
            dispatch(setOwnerIdAC(id));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);