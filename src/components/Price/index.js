import React from 'react'

import pdf from './pdf-icon.svg'
import price500 from '../../docs/price_500.pdf'
import price1000 from '../../docs/price_1000.pdf'
import priceModule from '../../docs/price_module.pdf';
import './Docs.sass'

const Price = () => (
  <div className="wrapper-price">
    <div className="row">
      <div className="columns">
        <section className="docs">
          <h2 className="docs__caption">Цены</h2>
          <ul className="docs__list">
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Для города с населением до 500 000 жителей</p>
                <a href={price500}>Скачать</a>
              </div>
            </li>
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Для города с населением до 1 000 000 жителей</p>
                <a href={price1000}>Скачать</a>
              </div>
            </li>
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Поставка и внедрение модуля одной электронной услуги.</p>
                <a href={priceModule}>Скачать</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

export default Price