import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './burgermenu.css';

export const BurgerMenu = ({ showMenu, toggleMenu}) => {



    return (
        <>
            <div className={`burger-menu ${showMenu ? 'active' : ''}`}>
                <div>BurgerMenu</div>
 
            </div>
        </>
    )
}
