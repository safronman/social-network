import React from 'react';
import styles from './DialogPreview.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

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

DialogPreview.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string
};

export default DialogPreview;