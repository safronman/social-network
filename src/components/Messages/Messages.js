import React from 'react';
import styles from './Messages.module.css';
import DialogsPreview from "./DialogsPreview/DialogsPreview";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import PropTypes from "prop-types";
import AddMessageContainer from "./DialogsMessages/AddMessage/AddMessageContainer";

const Messages = ({messagesPage}) => {
    // debugger
    let dialogsPreview = messagesPage.chats.map(item => {
        return <DialogsPreview key={item.chatsId}
                               chatsId={item.chatsId}
                               name={item.name}
                               avatar={item.avatar}/>
    });

    let dialogsMessages = messagesPage.chats[0].messages.map(item => {
        return <DialogsMessages key={item.messageId}
                                messageId={item.messageId}
                                author={item.author}
                                content={item.content}/>
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogsPreviewWrapper}>
                <ul className={styles.dialogsPreview}>{dialogsPreview}</ul>
            </div>
            <div>
                <div className={styles.dialogsMessages}>{dialogsMessages}</div>
                <AddMessageContainer/>
            </div>
        </div>
    );
};

Messages.propTypes = {
    messagesPage: PropTypes.shape({
        chats: PropTypes.array
    })
};

export default Messages;