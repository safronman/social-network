import React from "react";
import styles from "./AddMessage.module.css";

const AddMessage = (props) => {
    // debugger
    let onTextareaValueChange = (e) => {
        props.addCurrentMessageOnMessagesPage(e.currentTarget.value)
    };

    let onSendButtonClick = () => {
        props.addMessageOnMessagesPage(props.currentMessage);
    };

    return (
        <div className={styles.wrapper}>
            <textarea className={styles.textarea}
                      onChange={onTextareaValueChange}
                      placeholder="Write a message"
                      value={props.currentMessage}></textarea>
            <button className={styles.btn}
                    onClick={onSendButtonClick}>Send
            </button>
        </div>
    )
};

export default AddMessage;