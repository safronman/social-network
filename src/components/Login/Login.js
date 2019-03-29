import React from 'react';
import styles from './Login.module.css';
import {statuses} from "../../redux/requestStatuses";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    // debugger

    let id = props.authorization.userInfo.userId;

    if (props.authorization.isAuth) {
        return <Redirect to={`users/${id}`}/>
    }

    let onEmailInputChange = (event) => {
        props.setCurrentEmailText(event.currentTarget.value);
    };

    let onPasswordInputChange = (event) => {
        props.setCurrentPasswordText(event.currentTarget.value);
    };

    let onCheckboxInputChange = (event) => {
        props.setCurrentCheckboxValue(event.currentTarget.checked);
    };

    let onButtonClick = () => {
        props.login(props.loginPage.currentEmail, props.loginPage.currentPassword, props.loginPage.currentCheckbox);
    };

    let errorMessage = props.loginPage.status === statuses.STATUS_ERROR &&
        <div className={styles.statusError}>{props.loginPage.message}</div>;

    return (
        <>
            <h2>Registration page</h2>
            <div className={styles.wrapper}>
                {errorMessage}
                <div className={styles.fieldWrapper}>
                    <label className={styles.fieldLabel} htmlFor="email">Email:</label>
                    <input className={styles.fieldInput} type="email" id="email"
                           placeholder="Email"
                           value={props.loginPage.currentEmail}
                           onChange={onEmailInputChange}/>
                </div>
                <div className={styles.fieldWrapper}>
                    <label className={styles.fieldLabel} htmlFor="password">Password:</label>
                    <input className={styles.fieldInput} type="password" id="password"
                           placeholder="Password"
                           value={props.loginPage.currentPassword}
                           onChange={onPasswordInputChange}/>
                </div>
                <div className={styles.fieldWrapper}>
                    <input type="checkbox" id="check-1"
                           onChange={onCheckboxInputChange}
                           value={props.loginPage.currentCheckbox}/>
                    <label className={styles.fieldCheckboxLabel} htmlFor="check-1">Remember me</label>
                </div>
                <div className={styles.fieldWrapper}>
                    <button className={styles.btn} type="submit"
                            disabled={props.loginPage.status === statuses.STATUS_IN_PROGRESS}
                            onClick={onButtonClick}>Log in
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;