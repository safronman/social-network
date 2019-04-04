import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";
import PropTypes from "prop-types";

const Users = (props) => {
    // debugger

    let usersList = props.users.map(item => {
        return (
            <div key={item.id}>
                <User item={item} addToFriends={props.addToFriends} removeFromFriends={props.removeFromFriends}/>
            </div>
        )
    });

    return (
        <div>
            <h3>Users</h3>
            <div className={styles.userList}>{usersList}</div>
        </div>
    );
};

Users.propTypes = {
    usersPage: PropTypes.shape({
        status: PropTypes.string,
        users: PropTypes.array
    }),
    setStatus: PropTypes.func,
    setUsers: PropTypes.func
};

export default Users;
