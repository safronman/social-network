import React from 'react';
import FullNameUserProfileContainer from "./FullNameUserProfile/FullNameUserProfileContainer";
import AboutMeUserProfileContainer from "./AboutMeUserProfile/AboutMeUserProfileContainer";
import ContactsUserProfileContainer from "./ContactsUserProfile/ContactsUserProfileContainer";
import LookingForAJobUserProfileContainer from "./LookingForAJobUserProfile/LookingForAJobUserProfileContainer";
import LookingForAJobDescUserProfileContainer
    from "./LookingForAJobDescUserProfile/LookingForAJobDescUserProfileContainer";
import styles from "./UserProfile.module.css";

const UserProfile = (props) => {
    // debugger

    if (String(props.authorization.userInfo.userId) === props.match.params.userId) {
        props.userProfile.isOwner = true;
    } else {
        props.userProfile.isOwner = false;
    }

    let onEditBtnClick = () => {
        props.editMode();
    };

    let onSaveBtnClick = () => {
        props.editMode();
        props.saveUserProfile(props.userProfile);
    };

    return (
        <div>
            <h2>User profile</h2>
            <FullNameUserProfileContainer/>
            <AboutMeUserProfileContainer/>
            <ContactsUserProfileContainer/>
            <LookingForAJobUserProfileContainer/>
            <LookingForAJobDescUserProfileContainer/>
            {
                props.userProfile.isOwner ?
                    props.userProfile.editMode ?
                        <button className={styles.btn} onClick={onSaveBtnClick}>Save</button> :
                        <button className={styles.btn} onClick={onEditBtnClick}>Edit</button> :
                    null
            }
        </div>
    )
};

export default UserProfile;