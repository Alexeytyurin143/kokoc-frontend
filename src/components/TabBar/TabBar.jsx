import React, { useEffect } from 'react'
import s from './TabBar.module.scss'
import { NavLink } from 'react-router-dom'
import home from '../../assets/home.svg'
import graph from '../../assets/graph.svg'
import sparkler from '../../assets/sparkler.svg'
import trophy from '../../assets/trophy.svg'
import user from '../../assets/user.svg'
import { isLoggedIn } from '../../session'

export const TabBar = () => {
    
    if (!isLoggedIn()) {
        return (
            <div></div>
        )
    }

    return (
        <div className={s.tabbar}>
            <NavLink to='/mainpage' className={s.tabbar__link}>
                <img src={home} />
                <div>Главная</div>
            </NavLink>
            <NavLink to='/missions' className={s.tabbar__link}>
                <img src={sparkler} />
                Миссии
            </NavLink>
            <NavLink to='/rating' className={s.tabbar__link}>
                <img src={trophy} />
                Рейтинг
            </NavLink>
            <NavLink to='/stats' className={s.tabbar__link}>
                <img src={graph} />
                Статистика
            </NavLink>
            <NavLink to='/personal' className={s.tabbar__link}>
                <img src={user} />
                Профиль
            </NavLink>
        </div>
    )
}
