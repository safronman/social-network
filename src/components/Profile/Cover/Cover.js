import React from 'react';
import styles from './Cover.module.css';

const Cover = () => {
    return (
        <img className={styles.coverImg}
             src='https://via.placeholder.com/896X260?text=photo'
             alt="cover"/>
    );
};

export default Cover;