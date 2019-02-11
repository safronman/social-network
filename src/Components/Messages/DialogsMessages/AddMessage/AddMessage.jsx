import React from "react";
import styles from "./AddMessage.module.css";
import PropTypes from "prop-types";

const AddMessage = ({currentMessage, dispatch}) => {
    // debugger

    let onTextareaValueChange = (e) => {
        dispatch({
            type: "ADD-CURRENT-MESSAGE-TO-MESSAGES-PAGE",
            text: e.currentTarget.value
        })
    };

    let onSendButtonClick = () => {
        dispatch({
            type: "ADD-MESSAGE-TO-MESSAGES-PAGE",
            text: currentMessage
        })
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
    dispatch: PropTypes.func,
    currentMessage: PropTypes.string
};

export default AddMessage;