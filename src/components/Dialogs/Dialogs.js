import React from 'react';
import styles from './Dialogs.module.css'
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

let Dialogs = (props) => {

    let messages = props.messages.map(item => {
        if (item.senderId === props.userId) {
            return (
                <div className={styles.ownerMessagesWrapper} key={item.id}>
                    <p className={styles.ownerMessagesContent}>{item.body}
                        <span className={styles.deleteOwnerMessage}
                              onClick={() => {
                                  return onDeleteMessageClick(item.id)
                              }}>Delete
                            </span>
                    </p>
                    <div>
                        <img className={styles.avatar}
                             src={props.avatar ? props.avatar : 'https://www.fillmurray.com/50/50'}
                             alt="avatar"/>
                        <p className={styles.name}>{item.senderName}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.userMessagesWrapper} key={item.id}>
                    <div>
                        <img className={styles.avatar} src='https://placecage.com/50/50'
                             alt="avatar"/>
                        <p className={styles.name}>{item.senderName}</p>
                    </div>
                    <p className={styles.userMessagesContent}>{item.body}
                        <span className={styles.deleteUserMessage}
                              onClick={() => {
                                  return onDeleteMessageClick(item.id)
                              }}>Delete
                        </span>
                    </p>
                </div>
            )
        }
    });

    let newMessageRef = React.createRef();

    let onSendButtonClick = () => {
        props.sendMessage(props.match.params.userId, newMessageRef.current.value);
        newMessageRef.current.value = '';
    };

    let onDialogClick = (userId) => {
        props.history.push(`/dialogs/${userId}`);
        props.initialRequests(userId);
    };

    let onDeleteMessageClick = (messageId) => {
        props.deleteMessage(messageId, props.match.params.userId)
    };


    if (props.isAuth) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.dialogsWrapper}>
                    {
                        props.dialogs.map(item => {
                            let hasNewMessages = item.hasNewMessages ?
                                <span className={styles.newMessagesLabel}> NEW</span>
                                : null;

                            return (
                                <div key={item.id} onClick={() => {
                                    return onDialogClick(item.id)
                                }}>
                                    {
                                        String(item.id) === props.currentDialogId ?
                                            <p className={styles.currentDialog}>{item.userName}{hasNewMessages}</p> :
                                            <p className={styles.dialog}>{item.userName} {hasNewMessages}</p>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.messagesWrapper}>
                    {messages}
                    <div className={styles.addMessagesWrapper}>
                    <textarea className={styles.addMessagesField} ref={newMessageRef}
                              placeholder="Write a message"/>
                        <button className={styles.addMessagesBtn} onClick={onSendButtonClick}>Send</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <p className={styles.redirectToLoginPage}>Только залогиненный пользователь может увидеть эту
                    страницу.</p>
                <NavLink to='/' className={styles.redirectToLoginPage}>Перейдите на страницу логина</NavLink>
            </>
        )
    }
};

Dialogs.propTypes = {
    dialogs: PropTypes.array,
    currentDialogId: PropTypes.string,
    messages: PropTypes.array,
    unreadMessagesCounter: PropTypes.number,
    userId: PropTypes.number,
    avatar: PropTypes.string
};

export default Dialogs;