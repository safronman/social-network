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
            <p className={styles.userName}>{props.authorization.userInfo.userName} </p>
            <div className={styles.img_wrapper}>
                <img className={styles.profilePhoto_img}
                     src={props.avatar ? props.avatar : 'https://www.fillmurray.com/40/40' } alt="avatar"/>
                <UnreadMessagesCountContainer/>
            </div>
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