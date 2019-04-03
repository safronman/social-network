import React from 'react';
import styles from './Cover.module.css';

const Cover = () => {
    return (
        <img className={styles.coverImg}
             src='https://www.placecage.com/896/260'
             alt="cover"/>
    );
};

export default Cover;