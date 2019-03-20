import React from 'react';
import {connect} from "react-redux";
import MyProfile from "./MyProfile";
import {
    getProfileTC,
    saveMyProfileTC,
    setContactsValueAC,
    setFullNameAC,
    setLookingForAJobDescriptionAC,
    toggleEditModeAC,
    toggleLookingForAJobChangeValueAC
} from "../../redux/reducers/myProfilePageReducer";

// вводим классовую компоненту, чтобы делать запросы нв сервер
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
        saveMyProfile: (value) => {
            dispatch(saveMyProfileTC(value));
        },
        setCurrentLookingForAJobDescriptionValue: (value) => {
            dispatch(setLookingForAJobDescriptionAC(value));
        },
        toggleLookingForAJobChangeValue: () => {
            dispatch(toggleLookingForAJobChangeValueAC());
        },
        setContactsValue: (value) => {
            dispatch(setContactsValueAC(value));
        }
    }
};


MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer);

export default MyProfileContainer;