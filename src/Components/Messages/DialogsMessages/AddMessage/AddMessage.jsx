import React from "react";
import styles from "./AddMessage.module.css";
import PropTypes from "prop-types";

const AddMessage = ({messagesPage: {currentMessage}, addCurrentMessage, addMessage }) => {
    // debugger
    let onTextareaValueChange = (e) => {
        addCurrentMessage(e.currentTarget.value);
    };

    let onSendButtonClick = () => {
        addMessage(currentMessage);
    };

    return (
        <div className={styles.wrapper}>
            <textarea className={styles.textarea}
                      onChange={onTextareaValueChange}
                      placeholder="Write a message"
                      value={currentMessage}/>
            <button className={styles.btn}
                    onClick={onSendButtonClick}>Send
            </button>
        </div>
    )
};

AddMessage.propTypes = {
    addCurrentMessage: PropTypes.func,
    addMessage: PropTypes.func,
    currentMessage: PropTypes.string
};

export default AddMessage;