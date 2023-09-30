import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './sidebar.css'

export const Sidebar = () => {

    const [clicked, setClicked] = useState({
        home: false,
        explore: false,
        notifications: false,
        messages: false,
        bookmarks: false,
        profile: false,
    });

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setClicked({
            main: path === '/',
            mehanika: path === '/mehanika',
            thermodinamika: path === '/thermodinamika',
            electrica: path === '/electrica',
            optika: path === '/optika',
            yaderka: path === '/yaderka',
        });
    }, [location]);

    return (
        <>
            <nav className='nav-link'>
                <ul>
                    <Link to={`/`}>
                        <li className={clicked.main ? 'active' : ''}>
                            Головна
                        </li>
                    </Link>
                    <Link to={`/mehanika`}>
                        <li className={clicked.mehanika ? 'active' : ''}>
                            Механіка
                        </li>
                    </Link>
                    <Link to={`/thermodinamika`}>
                        <li className={clicked.thermodinamika ? 'active' : ''}>
                            Термодинаміка
                        </li>
                    </Link>
                    <Link to={`/electrica`}>
                        <li className={clicked.electrica ? 'active' : ''}>
                            Електрика
                        </li>
                    </Link>
                    <Link to={`/optika`}>
                        <li className={clicked.optika ? 'active' : ''}>
                            Оптика
                        </li>
                    </Link>
                    <Link to={`/yaderka`}>
                        <li className={clicked.yaderka ? 'active' : ''}>
                            Ядерна фізика
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}
