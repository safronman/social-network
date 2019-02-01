import React from 'react';
// import styles from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";
import PropTypes from "prop-types";

const Profile = (props) => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfo enableFullInfoBtn={props.state.enableFullInfoBtn}
                          toggleFullInfo={props.toggleFullInfo}/>

            <Posts state={props.state}
                   addPostOnProfilePage={props.addPostOnProfilePage}
                   addCurrentMessageOnProfilePage={props.addCurrentMessageOnProfilePage}/>
        </main>
    );
};

Profile.propTypes = {
    state: PropTypes.shape({
        postsData: PropTypes.array,
        enableFullInfoBtn: PropTypes.bool,
    })
};

export default Profile;