import React from 'react';
import s from './Profile.module.css';
import Cover from "./Cover/Cover";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <main className={s.profile}>
            <Cover/>
            <PersonalInfo/>
            <Posts/>
        </main>
    );
};

export default Profile;