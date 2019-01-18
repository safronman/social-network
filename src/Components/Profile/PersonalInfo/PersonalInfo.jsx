import React from 'react';
import s from './PersonalInfo.module.css';

const PersonalInfo = (props) => {

    let onFullInfoButton = () => {
        props.toggleFullInfo();
    };

    let fullInfo = null;

    if (props.fullInfoEnable) {
        fullInfo = (
            <ul className={s.fullList}>
                <li className={s.item}>Relationship status: married</li>
                <li className={s.item}>Languages: russian, english</li>
                <li className={s.item}>Education: BSUIR, 2011</li>
                <li className={s.item}>Work: AGAT - control system</li>
                <li className={s.item}>Mobile: 8(029) 529-32-85</li>
            </ul>
        );
    }

    return (
        <div className={s.info}>
            <img className={s.avatar}
                 src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png"
                 alt="Avatar"/>
            <ul className={s.list}>
                <li className={s.item}>Name: Safronov Valery</li>
                <li className={s.item}>Birthday: September 21, 1989</li>
                <li className={s.item}>Current city: Minsk</li>
            </ul>
            <button className={s.btn}
                    onClick={onFullInfoButton}>Show full information</button>
            {fullInfo}
        </div>
    );
};

export default PersonalInfo;