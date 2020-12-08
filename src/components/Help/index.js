import React from 'react'

import cat from  './footer-cat.png'
import './Help.sass'

const Help = () => (
  <div id="help" className="wrapper-footer">
    <div className="row">
      <div className="columns">
        <footer className="footer">
          <h2 className="footer__caption">Остались вопросы?</h2>
          <p className="footer__text">
            Напишите или позвоните нам в любое время
            <br/>
            и наши специалисты с удовольствием вам помогут!
          </p>
          <p className="footer__text">
            Email: <a href="mailto:uslugi@headmade.pro?subject=ИС%20Услуги">uslugi@headmade.pro</a>
          </p>
          <p className="footer__text">
            Тел: <a href="tel:+78432022147">+7(843)202-21-47</a>
          </p>
          <a href="mailto:uslugi@headmade.pro?subject=ИС%20Услуги" className="btn accent">Написать</a>
          <img className="footer__cat" src={cat} alt="cat" />
        </footer>
      </div>
    </div>
  </div>
)

export default Help