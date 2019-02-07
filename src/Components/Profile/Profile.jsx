import React from 'react';
// import styles from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";
import PropTypes from "prop-types";

const Profile = ({profilePage, addCurrentMessageToProfilePage, addPostToProfilePage, toggleFullInfoOnProfilePage}) => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfo profilePage={profilePage}
                          toggleFullInfoOnProfilePage={toggleFullInfoOnProfilePage}/>

            <Posts profilePage={profilePage}
                   addCurrentMessageToProfilePage={addCurrentMessageToProfilePage}
                   addPostToProfilePage={addPostToProfilePage}/>
        </main>
    );
};

Profile.propTypes = {
    addPostOnProfilePage: PropTypes.func,
    addCurrentMessageOnProfilePage: PropTypes.func,
    profilePage: PropTypes.object
};

export default Profile;