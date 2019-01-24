import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={styles.friendItem}>
            <img className={styles.friendAvatar}
                 src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                 alt="friend"/>
            <p className={styles.friendName}>{props.name}</p>
        </div>
    );
};

export default Friend;