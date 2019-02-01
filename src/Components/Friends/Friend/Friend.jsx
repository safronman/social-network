import React from 'react';
import styles from './Friend.module.css';
import PropTypes from "prop-types";

const Friend = ({id, img, name}) => {
    // debugger;
    return (
        <div className={styles.friendItem}>
            <img className={styles.friendAvatar}
                 src={img}
                 alt="friend"/>
            <p className={styles.friendName}>{name}</p>
        </div>
    );
};

Friend.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string
};

export default Friend;