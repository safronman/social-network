import React from 'react';
import styles from './UnreadMesagesCount.module.css'
import PropTypes from "prop-types";
import Dialogs from "../Dialogs/Dialogs";

const UnreadMessagesCount = (props) => {
    return (
        <span className={styles.counter}>{props.unreadMessagesCounter}</span>
    );
};

Dialogs.propTypes = {
    unreadMessagesCounter: PropTypes.number
};

export default UnreadMessagesCount;