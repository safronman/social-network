import React from 'react';
import styles from './Messages.module.css';
import DialogsPreview from "./DialogsPreview/DialogsPreview";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import AddMessage from "./DialogsMessages/AddMessage/AddMessage";
import PropTypes from "prop-types";

const Messages = ({messagesPage: {chats, currentMessage}, store}) => {
    // debugger

    let dialogsPreview = chats.map(item => {
        return <DialogsPreview key={item.chatsId}
                               chatsId={item.chatsId}
                               name={item.name}
                               avatar={item.avatar}/>
    });

    let dialogsMessages = chats[0].messages.map(item => {
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
                <AddMessage currentMessage={currentMessage} store={store}/>
            </div>
        </div>
    );
};

Messages.propTypes = {
    dispatch: PropTypes.func,
    messagesPage: PropTypes.shape({
        chats: PropTypes.array,
        currentMessage: PropTypes.string
    })
};

export default Messages;