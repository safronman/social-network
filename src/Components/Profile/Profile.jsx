import React from 'react';
// import styles from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfo enableFullInfoBtn={props.state.enableFullInfoBtn}
                          toggleFullInfo={props.toggleFullInfo}/>

            <Posts state={props.state}
                   addPost={props.addPost}
                   changeWritingMessage={props.changeWritingMessage}/>
        </main>
    );
};

export default Profile;