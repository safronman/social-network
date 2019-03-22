import React from 'react';
import styles from './../UserProfile.module.css';

const LookingForAJobDescUserProfile = (props) => {
    // debugger

    let onLookingForAJobDescriptionChange = (event) => {
        props.setCurrentLookingForAJobDescriptionValue(event.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Описание навыков</p>
            {
                props.userProfile.editMode ?
                    <textarea className={styles.editModeTitle}
                              value={props.userProfile.lookingForAJobDescription}
                        onChange={onLookingForAJobDescriptionChange}
                    /> :
                    <p className={styles.titleValue}>{props.userProfile.lookingForAJobDescription}</p>
            }
        </div>
    )
};

export default LookingForAJobDescUserProfile;