import React from "react";
import s from "./DialogMainContent.module.css";


const DialogMainContent = (props) => {
    return <p className={s.dialogsItemContent}>{props.message}</p>
};

export default DialogMainContent;