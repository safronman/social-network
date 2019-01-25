import React from 'react';
import styles from './DialogPreview.module.css';
import {NavLink} from "react-router-dom";

const DialogPreview = (props) => {
    // debugger
    const mainPath = "/dialogs/";

    return (
        <li className={styles.dialogsItem}>
            <NavLink to={`${mainPath}${props.id}`}
                     className={`${styles.dialogsLink}`}
                     activeClassName={styles.dialogsLinkActive}>
                <img className={styles.dialogsPhoto}
                     src={props.img}
                     alt="Avatar photo"
                     width="50px"/>
                <p>{props.name}</p>
            </NavLink>
        </li>
    );
};

export default DialogPreview;