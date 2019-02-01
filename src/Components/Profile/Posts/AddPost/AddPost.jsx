import React from 'react';
import styles from './AddPost.module.css';
import PropTypes from "prop-types";

const AddPost = ({currentMessage, addPostOnProfilePage, addCurrentMessageOnProfilePage}) => {
    // debugger

    let onTextareaChange = (e) => {
        addCurrentMessageOnProfilePage(e.currentTarget.value)
    };

    let onAddPostClick = () => {
        addPostOnProfilePage(currentMessage);
    };

    return (
        <div className={styles.newPost}>
            <h2>My posts</h2>
            <textarea className={styles.newPostTextarea}
                      onChange={onTextareaChange}
                      value={currentMessage}
                      placeholder="Add text"></textarea>
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