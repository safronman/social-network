import React from 'react';
import styles from './../Profile.module.css';
import PropTypes from "prop-types";

const LookingForAJobDescField = (props) => {

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

LookingForAJobDescField.propTypes = {
    editMode: PropTypes.bool,
    lookingForAJobDescription: PropTypes.string
};

export default LookingForAJobDescField;