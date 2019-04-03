import React from 'react';
import styles from './../UserProfile.module.css';

const LookingForAJobDescUserProfile = (props) => {

    let onLookingForAJobDescriptionChange = (event) => {
        props.setCurrentLookingForAJobDescriptionValue(event.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Описание навыков</p>
            {
                props.editMode ?
                    <textarea className={styles.editModeTitle}
                              value={props.lookingForAJobDescription}
                        onChange={onLookingForAJobDescriptionChange}
                    /> :
                    <p className={styles.titleValue}>{props.lookingForAJobDescription}</p>
            }
        </div>
    )
};

export default LookingForAJobDescUserProfile;