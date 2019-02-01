import React from 'react';
import styles from './Messages.module.css';
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogsMessages from "./DialogsMessages/DialogsMessages";
import AddMessage from "./DialogsMessages/AddMessage/AddMessage";

const Messages = (props) => {
    // debugger

    let dialogsPreview = props.messagesPage.chats.map(item => {
        return <DialogPreview key={item.chatsId}
                               chatsId={item.chatsId}
                               name={item.name}
                               avatar={item.avatar}
                               messages={item.messages}/>
    });

    let dialogsMessages = props.messagesPage.chats[0].messages.map(item => {
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
                <AddMessage currentMessage ={props.messagesPage.currentMessage}
                            addCurrentMessageOnMessagesPage={props.addCurrentMessageOnMessagesPage}
                            addMessageOnMessagesPage={props.addMessageOnMessagesPage}/>
            </div>
        </div>
    );
};

export default Messages;