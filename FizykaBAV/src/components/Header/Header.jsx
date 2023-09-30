import React from 'react';
import Logo from './../../img/logo.jpg';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className='logo-wrap'>
        <div className='wrap-img'>
          <Link to={`/`}>
          <img src={Logo} className="logo" alt="Fizyka Logo" />
          </Link>
        </div>
        <h1 className='title'>FizykaBAV</h1>
      </div>
    </>
  )
}