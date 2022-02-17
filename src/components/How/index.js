import React from 'react'

import how1 from './how-item-0.png'
import how2 from './how-item-2.png'
import how3 from './how-item-3.png'
import how4 from './how-item-1.png'
import how5 from './how-item-4.png'
import './How.sass'

const How = () => (
  <div id="how" className="wrapper-how">
    <div className="row">
      <div className="columns">
        <section className="how">
          <h2 className="how__caption">Основные преимущества</h2>
          <ul className="how__list">
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how1} alt="Вход" /></div>
              <h3 className="how__list-item-text">Вход через госуслуги (ЕСИА)</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how2} alt="Простота" /></div>
              <h3 className="how__list-item-text">Добавить новую услугу - просто</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how3} alt="Всё в компьютере" /></div>
              <h3 className="how__list-item-text">Весь процесс услуги - в электронном виде</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how4} alt="Мониторинг и контроль" /></div>
              <h3 className="how__list-item-text">Мониторинг, контроль и аналитика</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how5} alt="Электронный результат" /></div>
              <h3 className="how__list-item-text">Выдача результатов в электронном виде</h3>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

export default How