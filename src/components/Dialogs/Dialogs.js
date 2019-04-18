import React from 'react';
import styles from './Dialogs.module.css'
import PropTypes from "prop-types";
import Posts from "../Profile/Posts/Posts";

let Dialogs = (props) => {
    // debugger

    let messages = props.messages.map(item => {
        if (item.senderId === props.userInfo.userId) {
            return (
                <div className={styles.dialogs_owner_message} key={item.id}>
                    <div>
                        <p className={styles.dialogs_owner_messages_content}>{item.body}
                            <span className={styles.dialogs_btn_delete_owner_message}
                                  onClick={() => {
                                      return onDeleteMessageClick(item.id)
                                  }}>Delete
                            </span>
                        </p>
                    </div>
                    <div>
                        <img className={styles.dialogs_messages_img}
                             src={props.avatar ? props.avatar : 'https://www.fillmurray.com/50/50'}
                             alt="avatar"/>
                        <p className={styles.dialogs_owner_name}>{item.senderName}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.dialogs_user_message} key={item.id}>
                    <div>
                        <img className={styles.dialogs_messages_img} src='https://placecage.com/50/50'
                             alt="avatar"/>
                        <p className={styles.dialogs_owner_name}>{item.senderName}</p>
                    </div>
                    <p className={styles.dialogs_user_messages_content}>{item.body}
                        <span className={styles.dialogs_btn_delete_user_message}
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

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs_wrapper}>
                {
                    props.dialogs.map(item => {
                        let hasNewMessages = item.hasNewMessages ?
                            <span className={styles.new_message}> NEW</span>
                            : null;

                        return (
                            <div key={item.id} onClick={() => {
                                return onDialogClick(item.id)
                            }}>
                                {
                                    String(item.id) === props.currentDialogId ?
                                        <p className={styles.currentDialog}>{item.userName}{hasNewMessages}</p> :
                                        <p className={styles.dialogs_item}>{item.userName} {hasNewMessages}</p>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.dialogs_messages_wrapper}>
                {messages}
                <div className={styles.add_message_wrapper}>
                    <textarea className={styles.add_message_textarea} ref={newMessageRef}
                              placeholder="Write a message"/>
                    <button className={styles.add_message_btn} onClick={onSendButtonClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

Posts.propTypes = {
    dialogs: PropTypes.array,
    currentDialogId: PropTypes.string,
    messages: PropTypes.array,
    unreadMessagesCounter: PropTypes.number,
    userInfo: PropTypes.object,
    avatar: PropTypes.string
};

export default Dialogs;