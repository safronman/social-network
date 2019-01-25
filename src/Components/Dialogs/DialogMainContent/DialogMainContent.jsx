import React from "react";
import styles from "./DialogMainContent.module.css";

const DialogMainContent = (props) => {
    // debugger
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={props.img} alt="avatar"/>
            <p className={styles.message}>{props.message}</p>
        </div>
    )
};

export default DialogMainContent;