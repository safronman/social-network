import React from "react";
import styles from "./DialogsMessages.module.css";
import PropTypes from "prop-types";

const DialogsMessages = ({content, messageId, author:{avatar}}) => {

    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={avatar} alt="avatar"/>
            <p className={styles.message}>{content}</p>
        </div>
    )
};

DialogsMessages.propTypes = {
    messageId: PropTypes.number,
    content: PropTypes.string,
    author: PropTypes.shape({
        avatar: PropTypes.string
    })
};

export default DialogsMessages;