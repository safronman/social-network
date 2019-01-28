import React from 'react';
import styles from './Friend.module.css';
import PropTypes from "prop-types";

const Friend = (props) => {
    // debugger;
    return (
        <div className={styles.friendItem}>
            <img className={styles.friendAvatar}
                 src={props.img}
                 alt="friend"/>
            <p className={styles.friendName}>{props.name}</p>
        </div>
    );
};

Friend.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string
};

export default Friend;