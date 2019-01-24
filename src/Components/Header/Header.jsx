import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo}
                 src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png" alt="" width="100"/>
        </header>
    );
};

export default Header;