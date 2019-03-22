import React from 'react';
import styles from './../UserProfile.module.css';

const FullNameUserProfile = (props) => {
    // debugger
    let onFullNameChange = (event) => {
        props.setCurrentFullNameValue(event.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Имя</p>
            {
                props.userProfile.editMode ?
                    <input type="text"
                           className={styles.editModeTitle}
                           value={props.userProfile.fullName}
                           onChange={onFullNameChange}/> :
                    <p className={styles.titleValue}>{props.userProfile.fullName}</p>
            }
        </div>
    )
};

export default FullNameUserProfile;