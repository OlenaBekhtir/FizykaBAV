import React from 'react';
import './mainPage.css';
import Reklama1 from './../../img/reklama1.webp';
import Reklama2 from './../../img/reklama2.webp';

export const MainPage = () => {
  return (
    <>
      <div className='wrap-content'>

        <div className='main-text'>
          Відкрийте для себе, наскільки простою та цікавою може бути фізика! На цьому освітньому порталі ви знайдете зрозумілі пояснення та захоплюючі вправи. Поглиблюйте знання, досліджуйте загадки Всесвіту та розширюйте свої горизонти разом з нами. Приєднуйтесь вже зараз та розпочніть свою подорож у світ науки!
        </div>

        <section className='section-blocks'>

          <div className='block'>
            <h2 className='block-text'>Послуги репетитора з фізики<br />Розробка уроків та методичних матеріалів</h2>
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
