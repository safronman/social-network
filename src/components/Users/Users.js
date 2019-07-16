import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";
import PropTypes from "prop-types";

const Users = (props) => {
    let usersList = props.users.map(item => {
        return (
            <div key={item.id}>
                <User item={item}
                      addToFriends={props.addToFriends}
                      removeFromFriends={props.removeFromFriends}/>
            </div>
        )
    });

    let pagesNumber = Math.ceil(props.totalCount / props.pageSize);

    // преобразование числа в массив элементов
    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }

    let onPageClick = (currentPage) => {
        props.changeCurrentPage(currentPage)

    };

    return (
        <div>
            <h3>Users</h3>
            <div>
                {pages.map((item) => {
                    return (
                        <span
                            className={item === props.currentPage && styles.currentPage}
                            onClick={() => {onPageClick(item)}}
                        >{item } </span>
                    )
                })}
            </div>
            <br/>
            <div className={styles.userList}>{usersList}</div>
        </div>
    );
};

Users.propTypes = {
    status: PropTypes.string
};

export default Users;
