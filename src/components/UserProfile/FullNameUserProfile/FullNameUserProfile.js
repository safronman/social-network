import React from 'react';
import styles from './../UserProfile.module.css';

const FullNameUserProfile = (props) => {

    let onFullNameChange = (event) => {
        props.setCurrentFullNameValue(event.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Имя</p>
            {
                props.editMode ?
                    <input type="text"
                           className={styles.editModeTitle}
                           value={props.fullName}
                           onChange={onFullNameChange}/> :
                    <p className={styles.titleValue}>{props.fullName}</p>
            }
        </div>
    )
};

export default FullNameUserProfile;