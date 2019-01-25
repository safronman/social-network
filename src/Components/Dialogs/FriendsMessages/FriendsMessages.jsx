import React from "react";
import styles from "./FriendsMessages.module.css";

const FriendsMessages = (props) => {
    // debugger
    return (
        <div className={styles.wrapper}>
            <p className={styles.message}>{props.message}</p>
            <img className={styles.img} src={props.img} alt="avatar"/>
        </div>
    )
};

export default FriendsMessages;