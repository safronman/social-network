import React from 'react';
import styles from './NotFound.module.css';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h2 className={styles.title}>404</h2>
            <p className={styles.desc}>page not found</p>
            <NavLink to='/' className={styles.redirectToLoginPage}>Перейдите на страницу логина</NavLink>
        </>
    );
};

export default NotFound;