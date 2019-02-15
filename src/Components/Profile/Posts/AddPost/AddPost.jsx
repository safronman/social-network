import React from 'react';
import styles from './AddPost.module.css';
import PropTypes from "prop-types";
import {addCurrentMessageActionCreator, addPostActionCreator} from "../../../../redux/profilePageReducer";

const AddPost = ({currentMessage, store}) => {

    let onTextareaChange = (e) => {
        store.dispatch(addCurrentMessageActionCreator(e.currentTarget.value));
    };

    let onAddPostClick = () => {
        store.dispatch(addPostActionCreator(currentMessage));
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