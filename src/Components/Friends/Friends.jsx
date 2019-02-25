import React from 'react';
import styles from './Friends.module.css';
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

const Friends = ({sidebar: {friends}}) => {
    // debugger
    let friendsList = friends.map(item => {
        return <Friend key={item.id} name={item.name} id={item.id} img={item.img}/>
    });

    return (
        <div>
            <h3>Friends</h3>
            <div className={styles.friendsList}>{friendsList}</div>
        </div>
    );
};

Friends.propTypes = {
    sidebar: PropTypes.shape({
        friends: PropTypes.array
    })
};

export default Friends;