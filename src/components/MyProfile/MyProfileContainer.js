import React from 'react';
import {connect} from "react-redux";
import MyProfile from "./MyProfile";
import {
    getProfileTC,
    saveMyProfileTC,
    setAboutMeAC,
    setContactsValueAC,
    setFullNameAC,
    setLookingForAJobDescriptionAC,
    toggleEditModeAC,
    toggleLookingForAJobChangeValueAC
} from "../../redux/reducers/myProfilePageReducer";

let MyProfileContainer = class extends React.Component {
    render() {
        return <MyProfile {...this.props}/>
    }

    componentDidMount() {
        this.props.getProfile();
    }
};


let mapStateToProps = (state) => {
    return {
        myProfilePage: state.myProfilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getProfile: () => {
            dispatch(getProfileTC());
        },
        editMode: () => {
            dispatch(toggleEditModeAC());
        },
        setCurrentFullNameValue: (value) => {
            dispatch(setFullNameAC(value))
        },
        setCurrentAboutMeValue: (value) => {
            dispatch(setAboutMeAC(value))
        },
        setContactsValue: (value) => {
            dispatch(setContactsValueAC(value));
        },
        toggleLookingForAJobChangeValue: () => {
            dispatch(toggleLookingForAJobChangeValueAC());
        },
        setCurrentLookingForAJobDescriptionValue: (value) => {
            dispatch(setLookingForAJobDescriptionAC(value));
        },
        saveMyProfile: (value) => {
            dispatch(saveMyProfileTC(value));
        }
    }
};


MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer);

export default MyProfileContainer;