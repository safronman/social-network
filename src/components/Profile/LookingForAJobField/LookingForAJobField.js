import React from 'react';
import styles from './../Profile.module.css';
import PropTypes from "prop-types";
import AboutMeField from "../AboutMeField/AboutMeField";

const LookingForAJobField = (props) => {

    let onLookingForAJobChange = (event) => {
        props.setLookingForAJobChangeValue(event.currentTarget.checked);
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.titleKey}>Ищу работу</p>
            <input type="checkbox" checked={props.lookingForAJob} onChange={onLookingForAJobChange}/>
        </div>
    )
};

AboutMeField.propTypes = {
    lookingForAJob: PropTypes.string
};

export default LookingForAJobField;