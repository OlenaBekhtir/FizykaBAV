import React from 'react';
import Mehanika from './../../img/mehanika.webp';
import './mehanika.css'

export const MehanikaPage = () => {
  return (
    <>
      <div className='wrap-content'>
        <div className='wrap-mehanika'>
          <div className='wrapper'>
            <img src={Mehanika} alt='mehanika' className='image-mehanika' />
              <p className='text-mehanika'>
                МЕХАНІКА - це розділ фізики, який вивчає закони механічного руху та механічної взаємодії.
              </p>
              </div>
              <div className='wrap-text'>
              <p>
              <span className='title-span'>Механічний рух</span> - це зміна з часом положення тіла відносно іншого тіла, яке називають тілом відліку.
                <br />
                У СІ одиницею вимірювання довжини є 1 м (один метр), часу - 1 с (одна секунда).
                <br />
                <span className='title-span'>Матеріальна точка</span> - це тіло, розмірами якого в умовах даної задачі можна знехтувати.
                <br />
                <span className='title-span'>Траєкторія</span> - це лінія, по якій рухається тіло. Шлях - це довжина траєкторії.
                <br />
                <span className='title-span'>Прямолінійним рівномірним рухом </span> називають рух, при якому тіло за будь-які однакові проміжки часу здійснює рівномірні переміщення.
                <br />
                <span className='title-span'>Рівноприскореним</span> називають рух, при якому за будь-які рівні проміжки часу швидкість тіла змінюється однаково.
                <br />
                <span className='title-span'>Рівномірний криволінійний рух</span> - це рух із постійною за модулем швидкістю. Найпростішим прикладом такого руху є рівномірний рух по колу.
              </p>
              </div>
            </div>
            </div>
          </>
          )
}
