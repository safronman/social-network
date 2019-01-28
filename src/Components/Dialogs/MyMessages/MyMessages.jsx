import React from "react";
import styles from "./MyMessages.module.css";
import PropTypes from "prop-types";

const MyMessages = (props) => {
    // debugger
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={props.img} alt="avatar"/>
            <p className={styles.message}>{props.message}</p>
        </div>
    )
};

MyMessages.propTypes = {
    id: PropTypes.number,
    message: PropTypes.string,
    img: PropTypes.string
};

export default MyMessages;