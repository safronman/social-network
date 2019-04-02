import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <>
            <h2 className={styles.title}>404</h2>
            <p className={styles.desc}>page not found</p>
        </>
    );
};

export default NotFound;