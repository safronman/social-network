import React from 'react';
import styles from './LoginForm.module.css';
import {Field} from "redux-form";
import {statuses} from "../../redux/requestStatuses";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

let LoginForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    let errorMessage = props.status === statuses.STATUS_ERROR &&
        <div className={styles.statusError}>{props.message}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration page</h2>
            <div className={styles.testDataWrapper}>
                <p className={styles.testTitle}>Enter the following values to test the application</p>
                <p className={styles.testValue}>email: safronmanbox@gmail.com</p>
                <p className={styles.testValue}>password: 111</p>
            </div>
            <div className={styles.wrapper}>
                {errorMessage}
                <div className={styles.fieldWrapper}>
                    <label className={styles.fieldLabel} htmlFor="email">Email: </label>
                    <Field className={styles.fieldInput} name="email" component="input" type="email"/>
                </div>
                <div className={styles.fieldWrapper}>
                    <label className={styles.fieldLabel} htmlFor="password">Password:</label>
                    <Field className={styles.fieldInput} name="password" component="input" type="password"/>
                </div>
                <div className={styles.fieldWrapper}>
                    <Field name="saveData" component="input" type="checkbox"/>
                    <label className={styles.fieldCheckboxLabel} htmlFor="saveData">Remember me</label>
                </div>
                <div className={styles.btnWrapper}>
                    <button className={styles.btn} type="submit" disabled={pristine || submitting}>Log in</button>
                    <button className={styles.btn} type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </div>
        </form>
    );
};

LoginForm.propTypes = {
    status: PropTypes.string,
    message: PropTypes.string,
    isAuth: PropTypes.bool
};

export default LoginForm;


