import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={styles.friendItem}>
            <img className={styles.friendAvatar}
                 src={props.img}
                 alt="friend"/>
            <p className={styles.friendName}>{props.name}</p>
        </div>
    );
};

export default Friend;