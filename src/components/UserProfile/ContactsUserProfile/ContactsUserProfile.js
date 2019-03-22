import React from 'react';
import styles from './../UserProfile.module.css';

const ContactsUserProfile = (props) => {
    // debugger

    // не понимаю как реализовать замену контактов
    let onContactsChange = (event) => {
        // debugger
        props.setContactsValue(event.currentTarget.value);
    };

    let contacts = Object.keys(props.userProfile.contacts).map(item => {
        return (
            <div className={styles.contactsWrapper}>
                <p className={styles.contactsTitle}>{item}: </p>
                <div>{props.userProfile.contacts[item]}</div>
            </div>
        )
    });

    let editContacts = Object.keys(props.userProfile.contacts).map(item => {
        return (
            <div className={styles.contactsWrapper}>
                <p className={styles.contactsTitle}>{item}: </p>
                <input type="text" className={styles.editModeTitle}
                       value={props.userProfile.contacts[item]}
                       onChange={onContactsChange}
                />
            </div>
        )
    });

    return (
        <div className={styles.contactsWrapper}>
            <p className={styles.contactsTitleKey}>Контакты</p>
            {
                props.userProfile.editMode ?
                    <div>{editContacts}</div> :
                    <div>{contacts}</div>
            }
        </div>
    )
};

export default ContactsUserProfile;