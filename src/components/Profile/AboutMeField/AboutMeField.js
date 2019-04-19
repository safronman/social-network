import React from 'react';
import styles from './../Profile.module.css';
import PropTypes from "prop-types";

const AboutMeField = (props) => {

    let onAboutMeChange = (event) => {
        props.setCurrentAboutMeValue(event.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Обо мне</p>
            {
                props.editMode ?
                    <textarea className={styles.editModeTitle}
                              value={props.aboutMe}
                              onChange={onAboutMeChange}
                    /> :
                    <p className={styles.titleValue}>{props.aboutMe}</p>
            }
        </div>
    )
};

AboutMeField.propTypes = {
    editMode: PropTypes.bool,
    aboutMe: PropTypes.string
};

export default AboutMeField;