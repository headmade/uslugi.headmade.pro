import React from 'react'

import cat from  './footer-cat.png'
import './Help.sass'

const Help = () => (
  <div id="help" className="wrapper-footer">
    <div className="row">
      <div className="columns">
        <footer className="footer">
          <h2 className="footer__caption">О разработчике</h2>
          <br/>
          <p className="footer__text">ООО «ХЭДМЕЙД»</p>
          <p className="footer__text">
            <a href="mailto:info@headmade.pro?subject=ИС%20Услуги">info@headmade.pro</a>
          </p>
          <p className="footer__text">
            <a href="tel:+78432599923">+7(843)259-99-23</a>
          </p>
          <p className="footer__text">г. Казань, ул.Карла Маркса, д.5, оф.114</p>
          <img className="footer__cat" src={cat} alt="cat" />
        </footer>
      </div>
    </div>
  </div>
)

export default Help