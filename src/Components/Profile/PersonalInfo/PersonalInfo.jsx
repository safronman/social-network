import React, {Component} from 'react';
import s from './PersonalInfo.module.css';


class PersonalInfo extends Component {

    render() {
        return (
            <div className={s.info}>
                <img className={s.avatar} src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png"
                     alt=""/>
                <ul className={s.list}>
                    <li className={s.item}>Birthday: September 21, 1989</li>
                    <li className={s.item}>Current city: Minsk</li>
                    <li className={s.item}>Relationship status: Married</li>
                    <li className={s.item}>Education: BSUIR, 2011</li>
                </ul>
            </div>
        );
    }
}

export default PersonalInfo;