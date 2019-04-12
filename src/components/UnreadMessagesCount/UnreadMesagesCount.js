import React from 'react';
import styles from './UnreadMesagesCount.module.css'

const UnreadMessagesCount = (props) => {
    return (
        <span className={styles.counter}>{props.unreadMessagesCounter}</span>
    );
};

export default UnreadMessagesCount;