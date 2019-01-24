import React from "react";
import styles from "./DialogMainContent.module.css";


const DialogMainContent = (props) => {
    return <p className={styles.dialogsItemContent}>{props.message}</p>
};

export default DialogMainContent;