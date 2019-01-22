import React from 'react';
import s from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    // debugger
    return (
        <main>
            <Cover/>
            <PersonalInfo state={props.state.profile}
                          toggleFullInfo={props.toggleFullInfo}/>

            <Posts state={props.state.profile}
                   addPost={props.addPost}
                   changeWritingMessage={props.changeWritingMessage}/>
        </main>
    );
};

export default Profile;