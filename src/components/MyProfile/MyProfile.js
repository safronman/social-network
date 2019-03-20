import React from 'react';
import styles from './MyProfile.module.css';

const MyProfile = (props) => {
    // debugger

    let onFullNameInputChange = (event) => {
        props.setCurrentFullNameValue(event.currentTarget.value);
    };

    // не понимаю как реализовать замену контактов
    let onContactsChange = (event) => {
        // debugger
        props.setContactsValue(event.currentTarget.value);
    };

    let onLookingForAJobChange = () => {
        props.toggleLookingForAJobChangeValue();
    };

    let onLookingForAJobDescriptionChange = (event) => {
        props.setCurrentLookingForAJobDescriptionValue(event.currentTarget.value);
    };

    let onEditProfileButtonClick = () => {
        props.editMode();
    };

    let onSaveProfileButtonClick = () => {
        props.editMode();
        props.saveMyProfile(props.myProfilePage);
    };

    let contacts = Object.keys(props.myProfilePage.contacts).map(item => {
        return (
            <div className={styles.contactsWrapper}>
                <b>{item}: </b>
                <div>{props.myProfilePage.contacts[item]}</div>
            </div>
        )
    });

    let editContacts = Object.keys(props.myProfilePage.contacts).map(item => {
        return (
            <div className={styles.contactsWrapper}>
                <b>{item}: </b>
                <input className={styles.editModeContacts}
                       type="text"
                       defaultValue={props.myProfilePage.contacts[item]}
                       onChange={onContactsChange}/>
            </div>
        )
    });

    return (
        <div>
            <h2>my profile</h2>
            <div className={styles.wrapper}>

                {/*fullname*/}
                <div className={styles.infoKey}>fullName</div>
                {
                    props.myProfilePage.editMode ?
                        <input className={styles.editMode}
                               type="text"
                               defaultValue={props.myProfilePage.fullName}
                               onChange={onFullNameInputChange}/> :
                        <div className={styles.infoValue}>{props.myProfilePage.fullName}</div>
                }

                {/*contacts*/}
                <div className={styles.infoKey}>contacts</div>
                {
                    props.myProfilePage.editMode ?
                        <div className={styles.editMode}>{editContacts}</div> :
                        <div className={styles.infoValue}>{contacts}</div>
                }

                {/*lookingForAJob*/}
                <div className={styles.infoKey}>lookingForAJob</div>
                <div className={styles.infoValue}>
                    <input type="checkbox"
                           onChange={onLookingForAJobChange}
                           checked={props.myProfilePage.lookingForAJob}/>
                </div>

                {/*lookingForAJobDescription*/}
                <div className={styles.infoKey}>lookingForAJobDescription</div>
                {
                    props.myProfilePage.editMode ?
                        <textarea className={styles.editMode}
                                  defaultValue={props.myProfilePage.lookingForAJobDescription}
                                  onChange={onLookingForAJobDescriptionChange}/> :
                        <div className={styles.infoValue}>{props.myProfilePage.lookingForAJobDescription}</div>
                }
            </div>

            {/*button*/}
            {
                props.myProfilePage.editMode ?
                    <button className={styles.btn} onClick={onSaveProfileButtonClick}>Save profile</button> :
                    <button className={styles.btn} onClick={onEditProfileButtonClick}>Edit profile</button>
            }
        </div>
    )
};

export default MyProfile;