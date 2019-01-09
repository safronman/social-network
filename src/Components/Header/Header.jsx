import React, {Component} from 'react';
import s from './Header.module.css';

class Header extends Component {

    render() {
        return (
            <header className={s.header}>
                <img className={s.logo} src="https://en.opensuse.org/images/1/14/Button-filled-monochrome.png" alt="" width="100"/>
            </header>
        );
    }
}

export default Header;