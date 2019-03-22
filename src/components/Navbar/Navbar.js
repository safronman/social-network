import React from 'react';
import styles from './Navbar.module.css';
import NavLink from "react-router-dom/es/NavLink";

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <NavLink exact to='/' className={styles.link} activeClassName={styles.activeLink}>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className={styles.link} activeClassName={styles.activeLink}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/messages' className={styles.link} activeClassName={styles.activeLink}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className={styles.link} activeClassName={styles.activeLink}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={styles.link} activeClassName={styles.activeLink}>Settings</NavLink>
                </li>
                <li>
                    <NavLink to='/users/26' className={styles.link} activeClassName={styles.activeLink}>User profile</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;