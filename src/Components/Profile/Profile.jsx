import React from 'react';
// import styles from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";
import PropTypes from "prop-types";

const Profile = ({profilePage, addPostOnProfilePage, addCurrentMessageOnProfilePage, toggleFullInfo}) => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfo profilePage={profilePage}
                          toggleFullInfo={toggleFullInfo}/>

            <Posts profilePage={profilePage}
                   addPostOnProfilePage={addPostOnProfilePage}
                   addCurrentMessageOnProfilePage={addCurrentMessageOnProfilePage}/>
        </main>
    );
};

Profile.propTypes = {
    addPostOnProfilePage: PropTypes.func,
    addCurrentMessageOnProfilePage: PropTypes.func,
    profilePage: PropTypes.object
};

export default Profile;