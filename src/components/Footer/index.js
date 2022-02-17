import React from 'react'
import Link from "gatsby-link"

import upArrow from  './up-arrow.png'
import './Footer.sass'

const handleUp = () => {
  window.scroll(0, -100)
}

const Footer = ({location}) => {
  const lang = location === "/en" ? "en" : "ru"

  return (<div className="wrapper-under">
    <div className="row">
      <div className="columns">
        <section className="under">
          {/*{location == "ru" ?*/}
            <Link to="/" className="under__logo"><span className="banner-logo">ИС <span>УСЛУГИ</span></span></Link>
            {/*<Link to="/en" className="under__logo"><span className="banner-logo">IS <span>SERVICES</span></span></Link>
          }*/}
          <img className="under__up" src={upArrow} alt="up" onClick={()=>handleUp()} />
          <p className="under__text">
            Разработано в соответствии с <a href="http://guides.gosuslugi.ru/">правилами дизайна Единого портала Госуслуг</a>
          </p>
        </section>
      </div>
    </div>
  </div>
)
}

export default Footer
