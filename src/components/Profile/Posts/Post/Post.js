import React from 'react';
import styles from './Post.module.css';
import PropTypes from 'prop-types';

const Post = ({message, likes, avatar}) => {

    return (
        <div className={styles.postItem}>
            <div>
                <img className={styles.postAvatar} src={avatar ? avatar : 'https://www.fillmurray.com/50/50'} alt="avatar"/>
                <p>{message}</p>
            </div>
            <div>
                <div>like: {likes}</div>
            </div>
        </div>
    );
};

Post.propTypes = {
    message: PropTypes.string,
    likes: PropTypes.number,
    avatar: PropTypes.string
};

export default Post;