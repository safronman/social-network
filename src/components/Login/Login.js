import React from 'react';
import styles from './Login.module.css';
import {statuses} from "../../redux/requestStatuses";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    // debugger

    if (props.authorization.isAuth) {
        return <Redirect to='/profile'/>
    }

    // избавиться от ref используюя FLUX подход
    let mailRef = React.createRef();
    let passwordRef = React.createRef();
    let rememberMeRef = React.createRef();

    let onButtonClick = () => {
        props.login(mailRef.current.value, passwordRef.current.value, rememberMeRef.current.checked);
    };

    let errorMessage = props.loginPage.status === statuses.STATUS_ERROR &&
        <div className={styles.statusError}>{props.loginPage.message}</div>;

    return (
        <>
            <h2>Страница регистрации</h2>
            <div className={styles.wrapper}>
                <div className={styles.fieldWrapper}>
                    <label className={styles.fieldLabel} htmlFor="email">Email:</label>
                    <input className={styles.fieldInput} type="email" id="email"
                           placeholder="Email" ref={mailRef} defaultValue='safronmanbox@gmail.com'/>
                </div>
                <div className={styles.fieldWrapper}>
                    <label className={styles.fieldLabel} htmlFor="password">Password:</label>
                    <input className={styles.fieldInput} type="password" id="password"
                           placeholder="Password" ref={passwordRef} defaultValue='98919012sn'/>
                </div>
                <div className={styles.fieldWrapper}>
                    <input type="checkbox" id="check-1" ref={rememberMeRef}/>
                    <label className={styles.fieldCheckboxLabel} htmlFor="check-1">Remember me</label>
                </div>
                <div className={styles.fieldWrapper}>
                    <button className={styles.btn} type="submit"
                            disabled={props.loginPage.status === statuses.STATUS_IN_PROGRESS}
                            onClick={onButtonClick}>Log in
                    </button>
                </div>
                {errorMessage}
            </div>
        </>
    );
};

export default Login;