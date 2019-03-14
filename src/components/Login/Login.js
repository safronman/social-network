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
            <h2>Login</h2>
            <div className={styles.wrapper}>
                <div className={styles.fieldMail}>
                    <label className="field-email__label" htmlFor="email">Email: </label>
                    <input className="field-email__input" type="email" id="email"
                           placeholder="Введите почту" ref={mailRef} defaultValue='safronmanbox@gmail.com'/>
                </div>
                <div className={styles.fieldPassword}>
                    <label className="field-password__label" htmlFor="password">Password: </label>
                    <input className="field-password__input" type="password" id="password"
                           placeholder="Введите пароль" ref={passwordRef} defaultValue='98919012sn'/>
                </div>
                <div className={styles.fieldCheckbox}>
                    <input className="field-checkbox__input" type="checkbox" id="check-1" ref={rememberMeRef}/>
                    <label className="field-checkbox__label" htmlFor="check-1">Remember me </label>
                </div>
                <div className={styles.formBtnWrapper}>
                    <button className="btn  btn__form" type="submit"
                            disabled={props.loginPage.status === statuses.STATUS_IN_PROGRESS}
                            onClick={onButtonClick}>Sign in
                    </button>
                </div>
                {errorMessage}
            </div>
        </>
    );
};

export default Login;