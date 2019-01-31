import React from "react";
import styles from "./AddMessage.module.css";
// import PropTypes from "prop-types";

const AddMessage = (props) => {
    // debugger

    return (
        <div className={styles.addMessages}>
            <textarea className={styles.textarea} placeholder="add message"></textarea>
            <button className={styles.btn}>Add message</button>
        </div>
    )
};

// AddMessage.propTypes = {
//     messageId: PropTypes.number,
//     content: PropTypes.string,
//     author: PropTypes.shape({
//         avatar: PropTypes.string
//     })
// };

export default AddMessage;