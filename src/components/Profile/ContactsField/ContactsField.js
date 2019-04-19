import React from 'react';
import styles from './../Profile.module.css';
import PropTypes from "prop-types";

const ContactsField = (props) => {

    let onContactsChange = (newValue, item) => {
        props.setNewContactsValue(newValue, item);
    };

    let contacts = Object.keys(props.contacts).map((item, i) => {
        return (
            <div className={styles.contactsWrapper} key={i}>
                <p className={styles.contactsTitle}>{item}: </p>
                <div>{props.contacts[item]}</div>
            </div>
        )
    });

    let editContacts = Object.keys(props.contacts).map((item, i) => {
        return (
            <div className={styles.contactsWrapper} key={i}>
                <p className={styles.contactsTitle}>{item}: </p>
                <input type="text" className={styles.editModeTitle}
                       value={props.contacts[item]}
                       onChange={(event) => {
                           onContactsChange(event.currentTarget.value, item)
                       }}
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

ContactsField.propTypes = {
    editMode: PropTypes.bool,
    aboutMe: PropTypes.object
};

export default ContactsField;