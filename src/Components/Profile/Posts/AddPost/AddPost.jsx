import React from 'react';
import styles from './AddPost.module.css';
import PropTypes from "prop-types";

const AddPost = ({currentMessage, dispatch}) => {
    // debugger

    let onTextareaChange = (e) => {
        dispatch({
            type: "ADD-CURRENT-MESSAGE-TO-PROFILE-PAGE",
            message: e.currentTarget.value
        });
    };

    let onAddPostClick = () => {
        dispatch({
            type: "ADD-POST-TO-PROFILE-PAGE",
            message: currentMessage
        });
    };

    return (
        <div className={styles.newPost}>
            <h2>My posts</h2>
            <textarea className={styles.newPostTextarea}
                      onChange={onTextareaChange}
                      value={currentMessage}
                      placeholder="Add text"/>
            <button className={styles.newPostBtn}
                    onClick={onAddPostClick}>Add post
            </button>
        </div>
    );
};

AddPost.propTypes = {
    currentMessage: PropTypes.string,
    addPostOnProfilePage: PropTypes.func,
    addCurrentMessageOnProfilePage: PropTypes.func
};

export default AddPost;