import React from 'react';
import styles from './User.module.css';
import PropTypes from "prop-types";

const User = (props) => {
    // debugger

    let onSubscribeClick = (event) => {
        props.addToFriends(Number(event.currentTarget.dataset.userId));
    };

    let onUnsubscribeClick = (event) => {
        props.removeFromFriends(Number(event.currentTarget.dataset.userId));
    };

    return (
        <>
            <img className={styles.avatar}
                 src={props.item.photos.small === null ? 'https://placecage.com/80/80' : props.item.photos.small}
                 alt="avatar"/>
            <p className={styles.name}>{props.item.name.length > 15 ? `${props.item.name.substring(0, 12)} ...` : props.item.name}</p>
            {
                props.item.followed ?
                    <button data-user-id={props.item.id} className={styles.btn} onClick={onUnsubscribeClick}>Unsubscribe</button> :
                    <button data-user-id={props.item.id} className={styles.btn} onClick={onSubscribeClick}>Subscribe</button>
            }
        </>
    );
};

User.propTypes = {
    addToFriends: PropTypes.func,
    removeFromFriends: PropTypes.func,
    item: PropTypes.object
};

export default User;