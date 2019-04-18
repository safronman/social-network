import React from 'react';
import styles from "./UserProfile.module.css";
import PropTypes from "prop-types";

const UserProfile = (props) => {

    let contacts = Object.keys(props.userProfile.contacts).map((item, i) => {
        return (
            <div className={styles.contactsWrapper} key={i}>
                <p className={styles.contactsTitle}>{item}: </p>
                <div>{props.userProfile.contacts[item]}</div>
            </div>
        )
    });

    return (
        <div>
            <h2>User profile</h2>
            <div className={styles.wrapper}>
                <p className={styles.titleKey}>Имя</p>
                <p className={styles.titleValue}>{props.userProfile.fullName}</p>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.titleKey}>Обо мне</p>
                <p className={styles.titleValue}>{props.userProfile.aboutMe}</p>
            </div>
            <div className={styles.contactsWrapper}>
                <p className={styles.contactsTitleKey}>Контакты</p>
                <div>{contacts}</div>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.titleKey}>Ищу работу</p>
                <input type="checkbox" checked={props.userProfile.lookingForAJob} onChange={() => ({})}/>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.titleKey}>Описание навыков</p>
                <p className={styles.titleValue}>{props.userProfile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
};

UserProfile.propTypes = {
    userProfile: PropTypes.object,
    currentUserId: PropTypes.number
};


export default UserProfile;