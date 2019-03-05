import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";
import {STATUS_IN_PROGRESS, STATUS_NOT_INITIALIZED, STATUS_SUCCESS} from "../../redux/usersPageReducer";
import * as axios from "axios";
import PropTypes from "prop-types";

const Users = ({usersPage: {status, users}, setStatus, setUsers}) => {
    // debugger

    if (status === STATUS_NOT_INITIALIZED) {
        setStatus(STATUS_IN_PROGRESS);

        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=9')
            .then((response) => {
                setStatus(STATUS_SUCCESS);
                setUsers(response.data.items);
            })
    }

    if (users.length === 0) {
        return <div>users not found</div>
    }

    let usersList = users.map(item => {
        return <User key={item.id} name={item.name} avatar={item.photos}/>
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
