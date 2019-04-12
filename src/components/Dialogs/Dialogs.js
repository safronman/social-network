import React from 'react';
import styles from './Dialogs.module.css'

let Dialogs = (props) => {
    // debugger

    let messages = props.messages.map(item => {
        if (item.senderId === props.authorization.userInfo.userId) {
            return (
                <div className={styles.dialogs_owner_message} key={item.id}>
                    <div>
                        <p className={styles.dialogs_owner_messages_content}>{item.body}
                            <a className={styles.dialogs_btn_delete_owner_message}
                               onClick={() => {
                                   return onDeleteMessageClick(item.id)
                               }}>Delete
                            </a>
                        </p>
                    </div>
                    <div>
                        <img className={styles.dialogs_messages_img} src='https://placecage.com/50/50'
                             alt="avatar"/>
                        <p className={styles.dialogs_owner_name}>{item.senderName}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.dialogs_user_message} key={item.id}>
                    <div>
                        <img className={styles.dialogs_messages_img} src='https://www.fillmurray.com/50/50'
                             alt="avatar"/>
                        <p className={styles.dialogs_owner_name}>{item.senderName}</p>
                    </div>
                    <p className={styles.dialogs_user_messages_content}>{item.body}
                        <a className={styles.dialogs_btn_delete_user_message}
                           onClick={() => {
                               return onDeleteMessageClick(item.id)
                           }}>Delete
                        </a>
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
                        debugger
                        return (
                            <div key={item.id} onClick={() => {
                                return onDialogClick(item.id)
                            }}>
                                {
                                    String(item.id) === props.currentDialogId ?
                                        <p className={styles.currentDialog}>{item.userName}</p> :
                                        <p className={styles.dialogs_item}>{item.userName}</p>
                                }
                                {
                                    item.hasNewMessages ? <span> NEW</span> : null
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

export default Dialogs;