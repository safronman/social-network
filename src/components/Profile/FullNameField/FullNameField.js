import React from 'react';
import styles from './../Profile.module.css';
import PropTypes from "prop-types";

const FullNameField = (props) => {

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

FullNameField.propTypes = {
    editMode: PropTypes.bool,
    fullName: PropTypes.string
};

export default FullNameField;