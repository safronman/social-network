import React from 'react';
import styles from './DialogPreview.module.css';
import {NavLink} from "react-router-dom";

const DialogPreview = (props) => {
    const mainPath = "/dialogs/";
    return (
        <li className={styles.dialogsItem}>
            <NavLink to={`${mainPath}${props.id}`}
                     className={`${styles.dialogsLink}`}
                     activeClassName={styles.dialogsLinkActive}>
                <img className={styles.dialogsPhoto}
                     src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                     alt="Avatar photo"
                     width="50px"/>
                <p>{props.name}</p>
            </NavLink>
        </li>
    );
};

export default DialogPreview;