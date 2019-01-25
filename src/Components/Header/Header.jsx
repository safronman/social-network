import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo}
                 src={logo} alt="logotype"/>
        </header>
    );
};

export default Header;