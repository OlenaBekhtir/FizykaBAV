import React, { useState } from 'react';
import Logo from './../../img/logo.webp';
import './header.css';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  // Стан для відображення бургер-меню
  const [showMenu, setShowMenu] = useState(false);

  // Функція для зміни стану відображення бургер-меню
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Функція для закриття бургер-меню
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className='header'>
      <div className='logo-wrap'>
        <div className='wrap-img'>
          <Link to={`/`}>
            <img src={Logo} className="logo" alt="Fizyka Logo" />
          </Link>
        </div>
        <h1 className='title'>FizykaBAV</h1>
      </div>
      
      {/* Перехід від кнопки бургер-меню до кнопки у формі хрестика */}
      {showMenu ? (
        <button className="close-button" onClick={closeMenu}>
          {/* Кнопка у вигляді хрестика */}
          &#10005;
        </button>
      ) : (
        <button className='burger-button' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      )}

      {/* Відображення бургер-меню, якщо showMenu=true */}
      {showMenu && <BurgerMenu />}
    </div>
  );
};




// import React, { useState } from 'react';
// import Logo from './../../img/logo.webp';
// import './header.css';
// import { Link } from 'react-router-dom';
// import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

// export const Header = () => {
//   // Стан для відображення бургер-меню
//   const [showMenu, setShowMenu] = useState(false);

//   // Функція для зміни стану відображення бургер-меню
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className='header'>
//       <div className='logo-wrap'>
//         <div className='wrap-img'>
//           <Link to={`/`}>
//             <img src={Logo} className="logo" alt="Fizyka Logo" />
//           </Link>
//         </div>
//         <h1 className='title'>FizykaBAV</h1>
//       </div>
      
//       {/* Відображення бургер-меню, якщо showMenu=true */}
//       {showMenu && <BurgerMenu />}

//       {/* Кнопка бургер-меню */}
//       <button className='burger-button' onClick={toggleMenu}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//           <path d="M0 0h24v24H0z" fill="none" />
//           <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
//         </svg>
//       </button>
//     </div>
//   );
// };





// import React from 'react';
// import Logo from './../../img/logo.webp';
// import './header.css';
// import { Link } from 'react-router-dom';
// import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

// export const Header = ({ showMenu, toggleMenu }) => {
//   return (
//     <>
//     <div className='header'>
//       <div className='logo-wrap'>
//         <div className='wrap-img'>
//           <Link to={`/`}>
//             <img src={Logo} className="logo" alt="Fizyka Logo" />
//           </Link>
//         </div>
//         <h1 className='title'>FizykaBAV</h1>
//       </div>

//           <button className='burger-button' onClick={toggleMenu}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//               <path d="M0 0h24v24H0z" fill="none" />
//               <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
//             </svg>
//           </button>
//       </div>
//     </>
//   )
// }