import React from "react";
import styles from "./AddMessage.module.css";
import PropTypes from "prop-types";
import {addCurrentMessageActionCreator, addMessageActionCreator} from "../../../../redux/messagesPageReducer";

const AddMessage = ({currentMessage, store}) => {
    // debugger
    let onTextareaValueChange = (e) => {
        store.dispatch(addCurrentMessageActionCreator(e.currentTarget.value))
    };

    let onSendButtonClick = () => {
        store.dispatch(addMessageActionCreator(currentMessage))
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