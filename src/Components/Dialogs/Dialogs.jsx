import React from 'react';
import s from './Dialogs.module.css';
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogMainContent from "./DialogMainContent/DialogMainContent";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsPeople}>
                <ul className={s.dialogsList}>
                    <DialogPreview pathId="1" name="James"/>
                    <DialogPreview pathId="2" name="Bill"/>
                    <DialogPreview pathId="3" name="David"/>
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