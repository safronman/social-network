import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    // debugger

    let usersList = props.users.map(item => {
        return (
            <NavLink to={`/users/${item.id}`} key={item.id}>
                <User  name={item.name} avatar={item.photos} followed={item.followed}/>
            </NavLink>

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
