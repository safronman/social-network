import React from 'react';
import s from './AddPost.module.css';

const AddPost = (props) => {
    let onMessageChange = (e) => {
        props.changeWritingMessage(e.currentTarget.value);
    };

    let addNewPost = () => {
        props.addPost();
    };

    return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <textarea className={s.newPostTextarea} onChange={onMessageChange} placeholder="Add text"></textarea>
            <button className={s.newPostBtn} onClick={addNewPost}>Add post</button>
        </div>
    );
};

export default AddPost;