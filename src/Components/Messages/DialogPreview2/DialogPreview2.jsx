import React from 'react';
import styles from './DialogPreview2.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
// import AddMessage from "../AddMessage/AddMessage";

const DialogPreview2 = (props) => {
    // debugger

    // let dialogsMessages = props.messages.map(item => {
    //     return <AddMessage key={item.messageId}
    //                             messageId={item.messageId}
    //                             content={item.content}
    //                             author={item.author}/>
    // });

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

DialogPreview2.propTypes = {
    chatsId: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string
};

export default DialogPreview2;