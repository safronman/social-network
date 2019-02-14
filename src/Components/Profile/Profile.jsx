import React from 'react';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";
import PropTypes from "prop-types";
// import styles from './Profile.module.css';

const Profile = ({profilePage, store}) => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfo profilePage={profilePage} store={store}/>
            <Posts profilePage={profilePage} store={store}/>
        </main>
    );
};

Profile.propTypes = {
    dispatch: PropTypes.func,
    profilePage: PropTypes.object
};

export default Profile;