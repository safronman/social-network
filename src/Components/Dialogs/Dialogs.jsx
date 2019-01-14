import React from 'react';
import s from './Dialogs.module.css';
import DialogFirstInfo from "./DialogFirstInfo/DialogFirstInfo";
import DialogMainContent from "./DialogMainContent/DialogMainContent";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsPeople}>
                <ul className={s.dialogsList}>
                    <DialogFirstInfo pathId="1" name="James"/>
                    <DialogFirstInfo pathId="2" name="Bill"/>
                    <DialogFirstInfo pathId="3" name="David"/>
                </ul>
            </div>

            <div className={s.dialogsListContent}>
                <DialogMainContent message="Hello my friend"/>
                <DialogMainContent message="How are you?"/>
                <DialogMainContent message="London is the capital of Great Britain"/>
            </div>
        </div>
    );
};

export default Dialogs;