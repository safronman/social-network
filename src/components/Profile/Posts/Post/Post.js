import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../img/avatar.png'
import PropTypes from 'prop-types';

const Post = ({message, likes}) => {

    return (
        <div className={styles.postItem}>
            <div className={styles.postContent}>
                <img className={styles.postAvatar}
                     src={avatar}
                     alt="avatar"/>
                <p className={styles.postDesc}>{message}</p>
            </div>
            <div className={styles.postActions}>
                <div>like: {likes}</div>
            </div>
        </div>
    );
};

Post.propTypes = {
    message: PropTypes.string,
    likes: PropTypes.number
};

export default Post;