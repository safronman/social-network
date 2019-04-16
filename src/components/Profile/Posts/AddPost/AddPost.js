import React from 'react';
import styles from './AddPost.module.css';
import PropTypes from "prop-types";

const AddPost = ({profilePage:{currentMessage}, addCurrentMessage, addPost}) => {

    let onTextareaChange = (e) => {
        addCurrentMessage(e.currentTarget.value);
    };

    let onAddPostClick = () => {
        addPost(currentMessage);
    };

    return (
        <div className={styles.newPost}>
            <h2 className={styles.heading}>My posts</h2>
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
    addCurrentMessage: PropTypes.func,
    addPost: PropTypes.func
};

export default AddPost;