import React from 'react';
import styles from './../UserProfile.module.css';

const LookingForAJobUserProfile = (props) => {
    // debugger

    let onLookingForAJobChange = (event) => {
        props.setLookingForAJobChangeValue(event.currentTarget.checked);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Ищу работу</p>
            <input type="checkbox"
                   checked={props.userProfile.lookingForAJob}
                   onChange={onLookingForAJobChange}
            />
        </div>
    )
};

export default LookingForAJobUserProfile;