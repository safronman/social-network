import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";
import {statuses} from "../../redux/requestStatuses";
import * as axios from "axios";
import PropTypes from "prop-types";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

const Users = ({usersPage: {status, users}, setStatus, setUsers}) => {
    // debugger

    if (status === statuses.STATUS_NOT_INITIALIZED) {
        setStatus(statuses.STATUS_IN_PROGRESS);

        instance.get('users?count=12')
            .then((response) => {
                setStatus(statuses.STATUS_SUCCESS);
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
