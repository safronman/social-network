import React from 'react';
import Cover from "./Cover/Cover";
import PostsContainer from "./Posts/PostsContainer";
import FullNameUserProfileContainer from "../UserProfile/FullNameUserProfile/FullNameUserProfileContainer";
import AboutMeUserProfileContainer from "../UserProfile/AboutMeUserProfile/AboutMeUserProfileContainer";
import ContactsUserProfileContainer from "../UserProfile/ContactsUserProfile/ContactsUserProfileContainer";
import LookingForAJobUserProfileContainer
    from "../UserProfile/LookingForAJobUserProfile/LookingForAJobUserProfileContainer";
import LookingForAJobDescUserProfileContainer
    from "../UserProfile/LookingForAJobDescUserProfile/LookingForAJobDescUserProfileContainer";
import styles from "../UserProfile/UserProfile.module.css";

const Profile = (props) => {
    // debugger

    let onEditBtnClick = () => {
        props.editMode();
    };

    let onSaveBtnClick = () => {
        props.editMode();
        props.saveUserProfile(props.userProfile);
    };

    if (props.authorization.isAuth) {
        return (
            <main>
                <Cover/>
                <FullNameUserProfileContainer/>
                <AboutMeUserProfileContainer/>
                <ContactsUserProfileContainer/>
                <LookingForAJobUserProfileContainer/>
                <LookingForAJobDescUserProfileContainer/>
                {
                    props.profilePage.editMode ?
                        <button className={styles.btn} onClick={onSaveBtnClick}>Save</button> :
                        <button className={styles.btn} onClick={onEditBtnClick}>Edit</button>
                }
                <PostsContainer/>
            </main>
        )
    } else {
        return (
            <div>Только залогиненный пользователь может увидеть эту страницу. Перейдите на страницу логина</div>
        )
    }
};

export default Profile;