import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import {Redirect} from "react-router-dom";

const Header = (props) => {
    // debugger

    // if (props.isAuth) {
    //     return <Redirect to='/'/>
    // }

    let onLogOutBtnClick = () => {
        props.logOut();
    };

    let signIn = !props.isAuth &&
        <div>
            <button className={styles.btn}>Sign in</button>
            <button className={styles.btn}>Sign up</button>
        </div>;

    let showNickName = props.isAuth &&
        <div className={styles.showNickNameWrapper}>
            <p className={styles.userName}>{props.userInfo.userName}</p>
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