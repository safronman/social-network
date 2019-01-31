import React from 'react';
import styles from './Navbar.module.css';
import NavLink from "react-router-dom/es/NavLink";

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink exact to='/' className={`${styles.link}`} activeClassName={styles.activeLink}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/dialogs' className={styles.link} activeClassName={styles.activeLink}>Dialogs</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/messages' className={styles.link} activeClassName={styles.activeLink}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/news' className={styles.link} activeClassName={styles.activeLink}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/music' className={styles.link} activeClassName={styles.activeLink}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/settings' className={styles.link} activeClassName={styles.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;