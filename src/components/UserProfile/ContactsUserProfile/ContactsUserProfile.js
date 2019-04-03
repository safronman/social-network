import React from 'react';
import styles from './../UserProfile.module.css';

const ContactsUserProfile = (props) => {
    // debugger

    // не понимаю как реализовать замену контактов
    let onContactsChange = (event) => {
        props.setContactsValue(event.currentTarget.value);
    };

    let contacts = Object.keys(props.contacts).map((item, i) => {
        return (
            <div className={styles.contactsWrapper} key={i}>
                <p className={styles.contactsTitle}>{item}: </p>
                <div>{props.contacts[item]}</div>
            </div>
        )
    });

    let editContacts = Object.keys(props.contacts).map(item => {
        return (
            <div className={styles.contactsWrapper}>
                <p className={styles.contactsTitle}>{item}: </p>
                <input type="text" className={styles.editModeTitle}
                       value={props.contacts[item]}
                       onChange={onContactsChange}
                />
            </div>
        )
    });

    return (
        <div className={styles.contactsWrapper}>
            <p className={styles.contactsTitleKey}>Контакты</p>
            {
                props.editMode ?
                    <div>{editContacts}</div> :
                    <div>{contacts}</div>
            }
        </div>
    )
};

export default ContactsUserProfile;