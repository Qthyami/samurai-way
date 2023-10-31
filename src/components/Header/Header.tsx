import React, {useEffect} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {AuthMeTC} from "../../redux/auth-reducer";

const Header = () => {
    const isAuth=useAppSelector(state =>state.auth.isAuth)
   const login = useAppSelector(state => state.auth.login)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const thunk = AuthMeTC()
        dispatch(thunk)
    }, [])
    // const renderContent = isAuth ? <div>{loggedName}</div> : <NavLink to={"/login"}>Login</NavLink>;

    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

        <div className={s.loginBlock}>
            { isAuth ? login
                : <NavLink to={'/login'}>Login</NavLink> }

        </div>
    </header>
}

export default Header;