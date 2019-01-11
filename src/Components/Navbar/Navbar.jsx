import React from 'react';
import s from './Navbar.module.css';
import NavLink from "react-router-dom/es/NavLink";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to='/profile' className={`${s.link}`} activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' className={s.link} activeClassName={s.activeLink}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' className={s.link} activeClassName={s.activeLink}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={s.link} activeClassName={s.activeLink}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={s.link} activeClassName={s.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;