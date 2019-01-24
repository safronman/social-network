import React from 'react';
import styles from './AddPost.module.css';

const AddPost = (props) => {
    // debugger
    let onMessageChange = (e) => {
        props.changeWritingMessage(e.currentTarget.value);
    };

    let addNewPost = () => {
        props.addPost();
    };

    return (
        <div className={styles.newPost}>
            <h2>My posts</h2>
            <textarea className={styles.newPostTextarea} onChange={onMessageChange} placeholder="Add text"></textarea>
            <button className={styles.newPostBtn} onClick={addNewPost}>Add post</button>
        </div>
    );
};

export default AddPost;