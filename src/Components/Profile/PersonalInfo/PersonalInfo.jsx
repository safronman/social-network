import React from 'react';
import styles from './PersonalInfo.module.css';
import PropTypes from "prop-types";

const PersonalInfo = (props) => {
    // debugger

    let onFullInfoButton = () => {
        props.toggleFullInfo();
    };

    let fullInfo = null;

    if (props.enableFullInfoBtn) {
        fullInfo = (
            <ul className={styles.fullList}>
                <li className={styles.item}>Languages: russian, english</li>
                <li className={styles.item}>Education: The Belarusian State University of Culture and Arts, 2016</li>
                <li className={styles.item}>Relationship status: married</li>
            </ul>
        );
    }

    return (
        <div className={styles.info}>
            <ul className={styles.list}>
                <li className={styles.item}>Name: Margarita Samoylova</li>
                <li className={styles.item}>Birthday: August 17, 1992</li>
                <li className={styles.item}>Current city: Minsk</li>
            </ul>
            <button className={styles.btn}
                    onClick={onFullInfoButton}>Show full information</button>
            {fullInfo}
        </div>
    );
};

PersonalInfo.propTypes = {
    enableFullInfoBtn: PropTypes.bool
};

export default PersonalInfo;