import React from 'react';
import styles from './DialogPreview.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const DialogPreview = (props) => {
    // debugger

    const mainPath = "/messages/";

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogsItem}>
                <NavLink to={`${mainPath}${props.chatsId}`}
                         className={`${styles.dialogsLink}`}
                         activeClassName={styles.dialogsLinkActive}>
                    <img className={styles.dialogsPhoto}
                         src={props.avatar}
                         alt="Avatar photo"
                         width="50px"/>
                    <p>{props.name}</p>
                </NavLink>
            </div>
        </div>
    );
};

DialogPreview.propTypes = {
    chatsId: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string
};

export default DialogPreview;