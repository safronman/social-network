import React from 'react';
import s from './Dialogs.module.css';
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogMainContent from "./DialogMainContent/DialogMainContent";

let dialogsData = [
    {id: 1, name: "James"},
    {id: 2, name: "Bill"},
    {id: 3, name: "David"}
];

let messagesData = [
    {id: 1, message: "Good morning"},
    {id: 2, message: "Hello"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "I'm fine, thanks"}
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsPeople}>
                <ul className={s.dialogsList}>
                    {
                        dialogsData.map(item => {
                            return <DialogPreview key={item.id} id={item.id} name={item.name}/>
                        })
                    }
                </ul>
            </div>

            <div className={s.dialogsListContent}>
                {
                    messagesData.map(item => {
                        return <DialogMainContent key={item.id} id={item.id} message={item.message}/>
                    })
                }
            </div>
        </div>
    );
};

export default Dialogs;