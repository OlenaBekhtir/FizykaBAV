import React from 'react'
import './footer.css';

export const Footer = () => {
    return (
        <>
            <div class='footer'>
                <div class='author'><span className='author-name'>Освітній проект з фізики </span> &copy; Olena Bekhtir, 2023</div>
                <div>
                    <a class="email" href="mailto:elena.behtir@gmail.com"><img src='./src/img/icon-email.png' alt='email' className='icons-img' /></a>
                    <a href="https://t.me/optikB"><img src='./src/img/icon-telegram.png' alt='email' className='icons-img' /></a>
                    <a href="https://msng.link/o?380972234161=vi"><img src='./src/img/icon-viber.png' alt='email' className='icons-img' /></a>
                </div>
            </div>
        </>
    )
}
