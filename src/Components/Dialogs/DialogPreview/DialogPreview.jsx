import React from 'react';
import s from './DialogPreview.module.css';
import {NavLink} from "react-router-dom";

const DialogPreview = (props) => {
    const mainPath = "/dialogs/";
    return (
        <li className={s.dialogsItem}>
            <NavLink to={`${mainPath}${props.pathId}`}
                     className={`${s.dialogsLink}`}
                     activeClassName={s.dialogsLinkActive}>
                <img className={s.dialogsPhoto}
                     src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                     alt="Avatar photo"
                     width="50px"/>
                <p>{props.name}</p>
            </NavLink>
        </li>
    );
};

export default DialogPreview;