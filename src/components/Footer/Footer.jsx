import React from 'react'
import './footer.css';
import Email from './../../img/icon-email.jpg';
import Telegram from './../../img/icon-telegram.jpg';
import Viber from './../../img/icon-viber.jpg';

export const Footer = () => {
    return (
        <>
            <div class='footer'>
                <div class='author'><span className='author-name'>Освітній проект з фізики </span> &copy; Olena Bekhtir, 2023</div>
                <div>
                    <a class="email" href="mailto:elena.behtir@gmail.com"><img src={Email} alt='email' className='icons-img' /></a>
                    <a href="https://t.me/optikB"><img src={Telegram} alt='telegram' className='icons-img' /></a>
                    <a href="https://msng.link/o?380972234161=vi"><img src={Viber} alt='viber' className='icons-img' /></a>
                </div>
            </div>
        </>
    )
}
