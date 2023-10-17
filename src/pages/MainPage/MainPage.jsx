import React from 'react';
import './mainPage.css';
import Reklama1 from './../../img/reklama1.jpg';
import Reklama2 from './../../img/reklama2.jpg';

export const MainPage = () => {
  return (
    <>
      <div className='wrap-content'>
        <section className='section-blocks'>
          <div className='block'>
            <h2 className='block-text'>Послуги репетитора з фізики</h2>
            <img src={Reklama1} alt='reklama' className='block-image' />
            <a href="https://msng.link/o?380972234161=vi"><h3>телефон/вайбер: 097-223-41-61</h3></a>
          </div>
          <div className='block'>
            <h2 className='block-text'>Допомога у виконанні розрахункових, практичних та лабораторних робіт з фізики</h2>
            <div className='block-contact'>
              <a href="https://t.me/optikB"><h3>телеграм: https://t.me/optikB</h3></a>
              <img src={Reklama2} alt='reklama' className='block-image' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
