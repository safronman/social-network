import React from 'react';
import styles from './AddPost.module.css';
import PropTypes from "prop-types";

const AddPost = (props) => {
    let onTextareaChange = (e) => {
        props.addCurrentMessageOnProfilePage(e.currentTarget.value)
    };

    let onAddPostClick = () => {
        props.addPostOnProfilePage(props.currentMessage);
    };

    return (
        <div className={styles.newPost}>
            <h2>My posts</h2>
            <textarea className={styles.newPostTextarea}
                      onChange={onTextareaChange}
                      value={props.currentMessage}
                      placeholder="Add text"></textarea>
            <button className={styles.newPostBtn}
                    onClick={onAddPostClick}>Add post</button>
        </div>
    );
};

AddPost.propTypes = {
    addPost: PropTypes.func
};

export default AddPost;