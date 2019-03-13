import React from 'react';
import styles from './DialogsPreview.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const DialogsPreview = ({chatsId, name, avatar}) => {
    // debugger
    const mainPath = "/messages/";

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogsItem}>
                <NavLink to={`${mainPath}${chatsId}`}
                         className={`${styles.dialogsLink}`}
                         activeClassName={styles.dialogsLinkActive}>
                    <img className={styles.dialogsPhoto}
                         src={avatar}
                         alt="Avatar photo"
                         width="50px"/>
                    <p>{name}</p>
                </NavLink>
            </div>
        </div>
    );
};

DialogsPreview.propTypes = {
    chatsId: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string
};

export default DialogsPreview;