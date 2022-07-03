import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.images} src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
                 alt="logo"/>
        </header>
    );
};

