import React from 'react';
import styles from './PersonalInfo.module.css';

const PersonalInfo = (props) => {
    // debugger
    let onFullInfoButton = () => {
        props.toggleFullInfo();
    };

    let fullInfo = null;

    if (props.enableFullInfoBtn) {
        fullInfo = (
            <ul className={styles.fullList}>
                <li className={styles.item}>Relationship status: married</li>
                <li className={styles.item}>Languages: russian, english</li>
                <li className={styles.item}>Education: BSUIR, 2011</li>
                <li className={styles.item}>Work: AGAT - control system</li>
                <li className={styles.item}>Mobile: 8(029) 529-32-85</li>
            </ul>
        );
    }

    return (
        <div className={styles.info}>
            <img className={styles.avatar}
                 src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png"
                 alt="Avatar"/>
            <ul className={styles.list}>
                <li className={styles.item}>Name: Safronov Valery</li>
                <li className={styles.item}>Birthday: September 21, 1989</li>
                <li className={styles.item}>Current city: Minsk</li>
            </ul>
            <button className={styles.btn}
                    onClick={onFullInfoButton}>Show full information</button>
            {fullInfo}
        </div>
    );
};

export default PersonalInfo;