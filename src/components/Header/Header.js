import React from 'react';
import styles from './Header.module.css';
import logo from '../../img/logo.svg';
import UnreadMessagesCountContainer from './../UnreadMessagesCount/UnreadMesagesCountContainer'

const Header = (props) => {

    let onLogOutBtnClick = () => {
        props.logOut();
        props.setAuth(false);
        props.history.push('/');
    };

    let showNickName = props.authorization.isAuth &&
        <div className={styles.showNickNameWrapper}>
            <p className={styles.userName}>{props.authorization.userInfo.userName}
                <UnreadMessagesCountContainer/>
            </p>
            <button className={styles.btn} onClick={onLogOutBtnClick}>Log out</button>
        </div>;

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype"/>
            {showNickName}
        </header>
    )
};

export default Header;