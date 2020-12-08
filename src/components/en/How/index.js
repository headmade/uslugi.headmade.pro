import React from 'react'

import how1 from '../../How/how-item-0.png'
import how2 from '../../How/how-item-2.png'
import how3 from '../../How/how-item-3.png'
import how4 from '../../How/how-item-1.png'
import how5 from '../../How/how-item-4.png'
import '../../How/How.sass'

const How = () => (
  <div id="how" className="wrapper-how">
    <div className="row">
      <div className="columns">
        <section className="how">
          <h2 className="how__caption">Main advantages</h2>
          <ul className="how__list">
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how1} alt="Authentication" /></div>
              <h3 className="how__list-item-text">Multiple ways of authentication (ESIA in Russia)</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how2} alt="Simplicity" /></div>
              <h3 className="how__list-item-text">Ease of new service creation</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how3} alt="All-digital" /></div>
              <h3 className="how__list-item-text">Entire process of service providing is digital</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how4} alt="Monitoring" /></div>
              <h3 className="how__list-item-text">Management, monitoring, analitycs</h3>
            </li>
            <li className="how__list-item">
              <div className="how__img-wrapper"><img src={how5} alt="Digital result" /></div>
              <h3 className="how__list-item-text">Service result is privided in the digital form</h3>
            </li>
          </ul>
          <a href="https://demo.uslugi.headmade.pro" className="btn accent">Demo server</a>
          <p className="how__under-btn">Try demo right now!</p>
        </section>
      </div>
    </div>
  </div>
)

export default How
