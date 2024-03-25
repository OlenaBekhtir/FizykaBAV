import React from 'react';
import Logo from './../../img/logo.webp';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = ({ showSidebar, toggleSidebar }) => {
  return (
    <>
      <div className='logo-wrap'>
        <div className='wrap-img'>
          <Link to={`/`}>
            <img src={Logo} className="logo" alt="Fizyka Logo" />
          </Link>
        </div>
        <h1 className='title'>FizykaBAV</h1>

        {/* В залежності від значення showSidebar, міняємо класи кнопки */}
        {showSidebar ? (
          <button className='toggle-button' onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        ) : null}

      </div>
    </>
  )
}