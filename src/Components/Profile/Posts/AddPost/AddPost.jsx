import React from 'react';
import styles from './AddPost.module.css';
import PropTypes from "prop-types";

const AddPost = (props) => {
    // debugger

    let textareaEl = React.createRef();

    let onAddPostClick = () => {
        // debugger
        let value = textareaEl.current.value;
        props.addPost(value);
        textareaEl.current.value = '';
    };

    return (
        <div className={styles.newPost}>
            <h2>My posts</h2>
            <textarea className={styles.newPostTextarea} ref={textareaEl} placeholder="Add text"></textarea>
            <button className={styles.newPostBtn} onClick={onAddPostClick}>Add post</button>
        </div>
    );
};

AddPost.propTypes = {
    addPost: PropTypes.func
};

export default AddPost;