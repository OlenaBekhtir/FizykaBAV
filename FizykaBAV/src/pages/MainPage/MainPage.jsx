import React from 'react';
import Logo from './../../img/logo.jpg';
import './../../App.css';

export const MainPage = () => {
  return (
    <>
    <div>
        <img src={Logo} className="logo" alt="Fizyka Logo" />
      </div>
      <h1 className='title'>FizykaBAV</h1>
    </>  
  )
}
