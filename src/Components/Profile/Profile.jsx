import React from 'react';
// import styles from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";
import PropTypes from "prop-types";

const Profile = ({profilePage, dispatch}) => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfo profilePage={profilePage} dispatch={dispatch}/>

            <Posts profilePage={profilePage} dispatch={dispatch}/>
        </main>
    );
};

Profile.propTypes = {
    dispatch: PropTypes.func,
    profilePage: PropTypes.object
};

export default Profile;