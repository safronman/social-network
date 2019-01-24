import React from 'react';
import styles from './Dialogs.module.css';
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogMainContent from "./DialogMainContent/DialogMainContent";

const Dialogs = (props) => {
    // debugger

    let dialogsPreview = props.state.dialogsData.map(item => {
        return <DialogPreview key={item.id} id={item.id} name={item.name}/>
    });

    let dialogsMessages = props.state.messagesData.map(item => {
        return <DialogMainContent key={item.id} id={item.id} message={item.message}/>
    });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsPeople}>
                <ul className={styles.dialogsList}>{dialogsPreview}</ul>
            </div>
            <div className={styles.dialogsListContent}>{dialogsMessages}</div>
        </div>
    );
};

export default Dialogs;