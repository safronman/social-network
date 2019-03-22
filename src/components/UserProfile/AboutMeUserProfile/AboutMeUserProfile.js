import React from 'react';
import styles from './../UserProfile.module.css';

const AboutMeUserProfile = (props) => {
    // debugger
    let onAboutMeChange = (event) => {
        props.setCurrentAboutMeValue(event.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Обо мне</p>
            {
                props.userProfile.editMode ?
                    <textarea className={styles.editModeTitle}
                              value={props.userProfile.aboutMe}
                              onChange={onAboutMeChange}
                    /> :
                    <p className={styles.titleValue}>{props.userProfile.aboutMe}</p>
            }
        </div>
    )
};

export default AboutMeUserProfile;