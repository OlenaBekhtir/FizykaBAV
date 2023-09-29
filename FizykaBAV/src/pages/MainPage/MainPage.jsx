import React from 'react';
import Logo from './../../img/logo.jpg';
import './../../App.css';
import './mainPage.css';

export const MainPage = () => {
  return (
    <>
      <div className='logo-wrap'>
        <div className='wrap-img'>
          <img src={Logo} className="logo" alt="Fizyka Logo" />
        </div>
        <h1 className='title'>FizykaBAV</h1>
      </div>
    </>
  )
}
