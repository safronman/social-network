import React from 'react';
import styles from './UnreadMesagesCount.module.css'
import PropTypes from "prop-types";

const UnreadMessagesCount = (props) => {
    return (
        <span className={styles.counter}>{props.unreadMessagesCounter}</span>
    );
};

UnreadMessagesCount.propTypes = {
    unreadMessagesCounter: PropTypes.number
};

export default UnreadMessagesCount;