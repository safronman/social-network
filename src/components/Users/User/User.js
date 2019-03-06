import React from 'react';
import styles from './User.module.css';
import PropTypes from "prop-types";

const User = ({avatar, name}) => {
    // debugger;
    return (
        <div>
            <img className={styles.avatar}
                 src={avatar.small === null ? 'https://placecage.com/50/50' : avatar.small}
                 alt="avatar"/>
            <p className={styles.name}>{ name.length > 10 ? `${name.substring(0, 6)} ...` : name}</p>
        </div>
    );
};

User.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.object,
    name: PropTypes.string
};

export default User;