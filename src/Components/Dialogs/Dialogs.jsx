import React from 'react';
import s from './Dialogs.module.css';
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogMainContent from "./DialogMainContent/DialogMainContent";

// QUESTIONS
// Нужно ли копировать state,
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsPeople}>
                <ul className={s.dialogsList}>
                    {
                        props.state.dialogsData.map(item => {
                            return <DialogPreview key={item.id} id={item.id} name={item.name}/>
                        })
                    }
                </ul>
            </div>

            <div className={s.dialogsListContent}>
                {
                    props.state.messagesData.map(item => {
                        return <DialogMainContent key={item.id} id={item.id} message={item.message}/>
                    })
                }
            </div>
        </div>
    );
};

export default Dialogs;