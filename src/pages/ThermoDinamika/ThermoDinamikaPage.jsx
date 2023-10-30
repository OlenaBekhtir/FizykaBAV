import React from 'react'
import ThermoDinamika from './../../img/thermodinamika.webp';
import './thermodinamika.css'

export const ThermoDinamikaPage = () => {
  return (
    <>
      <div className='wrap-content'>
        <div className='wrap-thermodinamika'>
          <div className='wrapper'>
            <img src={ThermoDinamika} alt='thermodinamika' className='image-thermodinamika' />
            <p className='text-thermodinamika'>
              ТЕРМОДИНАМІКА - це розділ фізики, який вивчає найбільш загальні властивості макроскопічних систем і способи передачі та перетворення енергії в таких системах.
            </p>
          </div>
          <div className='wrap-text'>
            <p>
              <span className='title-span'>Тепловий рух</span> - це хаотичний рух частинок, з яких складається тіло.
              <br />
              <span className='title-span'>Внутрішня енергія тіла U</span> - це енергія руху і взаємодії частинок тіла (сума кінетичних та потенціальних енергій усіх молекул чи атомів). Одиницею вимірювання внутрішньої енергії в СІ є 1 Дж (один Джоуль).
              <br />
              <span className='title-span'>Способи зміни внутрішньої енергії</span> - виконання роботи та теплообмін.
              <br />
              <span className='title-span'>Теплообмін (теплопередача)</span>- це процес передачі енергії від більш нагрітого до менш нагрітого тіла (або частин тіла).
              <br />
              <span className='title-span'>Кількість теплоти Q</span> - це скалярна величина, що чисельно дорівнює енергії, яку отримує чи віддає тіло під час теплообміну. Одиницею вимірювання кількості теплоти у СІ є 1 Дж. Позасистемною одиницею вимірювання кількості теплоти  є калорія: 1 кал = 4,19 Дж.
            </p>
          </div>
        </div>
      </div>
    </>

  )
}
