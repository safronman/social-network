import React from 'react';
import styles from './User.module.css';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const User = (props) => {

    let onSubscribeClick = (event) => {
        props.addToFriends(Number(event.currentTarget.dataset.userId));
    };

    let onUnsubscribeClick = (event) => {
        props.removeFromFriends(Number(event.currentTarget.dataset.userId));
    };

    return (
        <>
            <NavLink className={styles.link} to={`/users/${props.item.id}`}>
                <img className={styles.avatar}
                     src={props.item.photos.small === null ? 'https://placeimg.com/640/480/any' : props.item.photos.small}
                     alt="avatar"/>
                <p className={styles.name}>{props.item.name.length > 15 ? `${props.item.name.substring(0, 12)} ...` : props.item.name}</p>
            </NavLink>
            {
                props.item.followed ?
                    <button data-user-id={props.item.id} className={styles.followBtn}
                            onClick={onUnsubscribeClick}>Unsubscribe</button> :
                    <button data-user-id={props.item.id} className={styles.followBtn}
                            onClick={onSubscribeClick}>Subscribe</button>
            }
            <NavLink className={styles.sendBtn} to={`/dialogs/${props.item.id}`}>Send message</NavLink>
        </>
    );
};

User.propTypes = {
    item: PropTypes.object
};

export default User;