import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = (props) => {
    // debugger

    let contacts = Object.keys(props.userProfile.contacts).map(item => {
        return (
            <div className={styles.wrapper}>
                <p className={styles.contacts}>{item}: </p>
                <div>{props.userProfile.contacts[item] === '' || props.userProfile.contacts[item] === null ?
                    'поле не заполнено' :
                    props.userProfile.contacts[item]}</div>
            </div>
        )
    });

    return (
        <div>
            <h2>User profile</h2>
            <div className={styles.wrapper}>
                <p className={styles.title}>fullname: </p>
                {props.userProfile.fullName}</div>
            <div className={styles.wrapper}>
                <p className={styles.title}> aboutMe: </p>
                {props.userProfile.aboutMe === '' || props.userProfile.aboutMe === null ?
                    'поле не заполнено' :
                    props.userProfile.aboutMe}
            </div>
            <div>
                <p className={styles.titleContacts}>contacts: </p>
                {contacts}
            </div>
            <div className={styles.wrapper}>
                <p className={styles.title}>lookingForAJob: </p>
                <input type="checkbox" checked={props.userProfile.lookingForAJob}/>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.title}>lookingForAJobDescription: </p>
                {props.userProfile.lookingForAJobDescription}</div>
        </div>
    )
};

export default UserProfile;