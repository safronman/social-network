import React from "react";
import styles from "./FriendsMessages.module.css";
import PropTypes from "prop-types";

const FriendsMessages = (props) => {
    // debugger
    return (
        <div className={styles.wrapper}>
            <p className={styles.message}>{props.message}</p>
            <img className={styles.img} src={props.img} alt="avatar"/>
        </div>
    )
};

FriendsMessages.propTypes = {
    id: PropTypes.number,
    message: PropTypes.string,
    img: PropTypes.string
};

export default FriendsMessages;