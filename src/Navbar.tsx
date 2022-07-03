import React from 'react';
import s from './Navbar.module.css';
export const Navbar = () => {
    return (
        <aside className={s.nav}>
            <ul className={s.menu}>
                <li className={s.item}><a href="src/Navbar#" className={s.link}>Profile</a></li>
                <li className={s.item}><a href="src/Navbar#" className={s.link}>Messages</a></li>
                <li className={s.item}><a href="src/Navbar#" className={s.link}>News</a></li>
                <li className={s.item}><a href="src/Navbar#" className={s.link}>Music</a></li>
                <li className={s.item}><a href="src/Navbar#" className={s.link}>Settings</a></li>
            </ul>
        </aside>
    );
};
