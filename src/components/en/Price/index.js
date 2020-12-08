import React from 'react'

import pdf from '../../Docs/pdf-icon.svg'
import price500 from '../../../docs/price_500.pdf'
import price1000 from '../../../docs/price_1000.pdf'
import '../../Price/Docs.sass'

const Price = () => (
  <div className="wrapper-price">
    <div className="row">
      <div className="columns">
        <section className="docs">
          <h2 className="docs__caption">Price</h2>
          <ul className="docs__list">
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Cities below 500 000</p>
                <a href={price500}>Download</a>
              </div>
            </li>
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Cities within range<br />500 000 - 1 000 000</p>
                <a href={price1000}>Download</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

export default Price
