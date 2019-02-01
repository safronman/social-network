import React from "react";
import styles from "./AddMessage.module.css";
import PropTypes from "prop-types";

const AddMessage = ({addCurrentMessageOnMessagesPage, addMessageOnMessagesPage, currentMessage}) => {
    // debugger
    let onTextareaValueChange = (e) => {
        addCurrentMessageOnMessagesPage(e.currentTarget.value)
    };

    let onSendButtonClick = () => {
        addMessageOnMessagesPage(currentMessage);
    };

    return (
        <div className={styles.wrapper}>
            <textarea className={styles.textarea}
                      onChange={onTextareaValueChange}
                      placeholder="Write a message"
                      value={currentMessage}></textarea>
            <button className={styles.btn}
                    onClick={onSendButtonClick}>Send
            </button>
        </div>
    )
};

AddMessage.propTypes = {
    addCurrentMessageOnMessagesPage: PropTypes.func,
    addMessageOnMessagesPage: PropTypes.func,
    currentMessage: PropTypes.string
};

export default AddMessage;