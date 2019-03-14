import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import {Redirect} from "react-router-dom";

const Header = (props) => {
    // debugger

    let onLogOutBtnClick = () => {
        props.logOut();
    };

    let signIn = !props.authorization.isAuth && <Redirect to='/'/>;

    let showNickName = props.authorization.isAuth &&
        <div className={styles.showNickNameWrapper}>
            <p className={styles.userName}>{props.authorization.userInfo.userName}</p>
            <button className={styles.btn} onClick={onLogOutBtnClick}>Log out</button>
        </div>;

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype"/>
            {signIn}
            {showNickName}
        </header>
    )
};

export default Header;