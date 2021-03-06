import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import UnreadMessagesCountContainer from './UnreadMessagesCount/UnreadMesagesCountContainer'
import PropTypes from "prop-types";

const Header = (props) => {

    let onLogOutBtnClick = () => {
        props.logOut();
        props.setAuth(false);
        props.history.push('/');
    };

    let showNickName = props.isAuth &&
        <div className={styles.info}>
            <p className={styles.userName}>{props.userName} </p>
            <div className={styles.imgWrapper}>
                <img className={styles.avatar}
                     src={props.avatar ? props.avatar : 'https://www.fillmurray.com/40/40'} alt="avatar"/>
                <UnreadMessagesCountContainer/>
            </div>
            <button className={styles.logOutBtn} onClick={onLogOutBtnClick}>Log out</button>
        </div>;

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype"/>
            {showNickName}
        </header>
    )
};

Header.propTypes = {
    isAuth: PropTypes.bool,
    userName: PropTypes.string,
    avatar: PropTypes.string
};

export default Header;