import React from 'react';
import styles from "../Profile/Profile.module.css";
import Cover from "./Cover/Cover";
import PostsContainer from "./Posts/PostsContainer";
import ContactsFieldContainer from "./ContactsField/ContactsFieldContainer";
import LookingForAJobFieldContainer from "./LookingForAJobField/LookingForAJobFieldContainer";
import LookingForAJobDescFieldContainer
    from "./LookingForAJobDescField/LookingForAJobDescFieldContainer";
import FullNameFieldContainer from "./FullNameField/FullNameFieldContainer";
import AboutMeFieldContainer from "./AboutMeField/AboutMeFieldContainer";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    // debugger

    let onEditBtnClick = () => {
        props.editMode();
    };

    let onSaveBtnClick = () => {
        props.editMode();
        props.saveProfile(props.profilePage);
    };

    if (props.authorization.isAuth) {
        return (
            <main>
                <Cover/>
                <FullNameFieldContainer/>
                <AboutMeFieldContainer/>
                <ContactsFieldContainer/>
                <LookingForAJobFieldContainer/>
                <LookingForAJobDescFieldContainer/>
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
            <>
                <p className={styles.titleLink}>Только залогиненный пользователь может увидеть эту страницу.</p>
                <NavLink to='/' className={styles.titleLink}>Перейдите на страницу логина</NavLink>
            </>
        )
    }
};

export default Profile;