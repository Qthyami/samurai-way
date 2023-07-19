import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={location.pathname === '/profile' ? s.active : ''}>
                    Profile
                </NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/dialogs" className={location.pathname === '/dialogs' ? s.active : ''}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={location.pathname === '/news' ? s.active : ''}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={location.pathname === '/music' ? s.active : ''}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={location.pathname === '/settings' ? s.active : ''}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};
