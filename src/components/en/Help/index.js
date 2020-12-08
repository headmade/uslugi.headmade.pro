import React from 'react'

import cat from  '../../Help/footer-cat.png'
import '../../Help/Help.sass'

const Help = () => (
  <div id="help" className="wrapper-footer">
    <div className="row">
      <div className="columns">
        <footer className="footer">
          <h2 className="footer__caption">Any questions?</h2>
          <p className="footer__text">
            Drop us a line or call us any time
            <br/>
            and our experts will be happy to help you!
          </p>
          <p className="footer__text">
            Email: <a href="mailto:uslugi@headmade.pro?subject=IS%20Services">uslugi@headmade.pro</a>
          </p>
          <p className="footer__text">
            Тел: <a href="tel:+78432022147">+7(843)202-21-47</a>
          </p>
          <a href="mailto:uslugi@headmade.pro?subject=ИС%20Услуги" className="btn accent">Ask in email</a>
          <img className="footer__cat" src={cat} alt="cat" />
        </footer>
      </div>
    </div>
  </div>
)

export default Help
