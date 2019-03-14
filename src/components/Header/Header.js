import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import {Redirect} from "react-router-dom";

const Header = (props) => {
    // debugger

    // if (props.authPage.isAuth) {
    //     return <Redirect to='/profile'/>
    // }

    let onLogOutBtnClick = () => {
        // debugger
        props.logOut();
    };

    // let signIn = !props.authPage.isAuth &&
    //     <div>
    //         <button className={styles.btn}>Sign in</button>
    //         <button className={styles.btn}>Registration</button>
    //     </div>;

    let showNickName = props.authPage.isAuth &&
        <div className={styles.showNickNameWrapper}>
            <p className={styles.userName}>{props.authPage.userInfo.userName}</p>
            <button className={styles.btn} onClick={onLogOutBtnClick}>Log out</button>
        </div>;

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype"/>
            {/*{signIn}*/}
            {showNickName}
        </header>
    )
};

export default Header;