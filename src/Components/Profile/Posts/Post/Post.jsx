import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.postItem}>
            <div className={styles.postContent}>
                <img className={styles.postAvatar}
                     src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png"
                     alt=""/>
                <p className={styles.postDesc}>{props.message}</p>
            </div>
            <div className={styles.postActions}>
                <div>like: {props.likes}</div>
            </div>
        </div>
    );
};

export default Post;