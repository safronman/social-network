import React from 'react';
import styles from './Dialogs.module.css'

let Dialogs = (props) => {

    let newMessageRef = React.createRef();

    let message = props.messages.map(item => {
        return (
            <div className={styles.dialogs_messages_item}>
                <img className={styles.dialogs_messages_img} src='https://placecage.com/80/80'
                     alt="avatar"/>
                <p className={styles.dialogs_messages_content}>{item.body}</p>
            </div>
        )
    });

    let onSendButtonClick = () => {
        props.sendMessage(props.match.params.userId, newMessageRef.current.value);
        newMessageRef.current.value = '';
    };

    let onDialogClick = (userId) => {
        props.history.push(`/dialogs/${userId}`);
        props.initialRequests(userId);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs_wrapper}>
                {
                    props.dialogs.map(item => {
                        return (
                            <div key={item.id} onClick={() => {
                                return onDialogClick(item.id)
                            }}>
                                {
                                    String(item.id) === props.currentDialogId ?
                                        <p className={styles.currentDialog}>{item.userName}</p> :
                                        <p className={styles.dialogs_item}>{item.userName}</p>
                                }

                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.dialogs_messages_wrapper}>
                {message}
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