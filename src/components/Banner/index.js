import React from 'react'
import Link from "gatsby-link"

import bannerIcon from './Banner.png'
import './Banner.sass'

const Banner = ({location}) => {

  const lang = location === "/en/" ? "en" : "ru"

  const title_long = {
    ru: "Информационная система органов исполнительной власти, обеспечивающая автоматизацию административных процедур по предоставлению государственных и муниципальных услуг",
    en: "Information system for municipal and goverment authorities, providing automatization of administrative procedures for fovernment and monicipal services."
  }[lang]

  return (<div className="banner">
    <div className="row">
      <div className="columns">
        <div className="banner__annotation">
          {lang == "ru" ?
            <Link to="/" className="banner-logo">ИС <span>Услуги</span></Link> :
            <Link to={"/"+lang} className="banner-logo">IS <span>Services</span></Link>
          }
          <h1 className="banner-text">
            {title_long}
          </h1>
          <div className="other-lang"><a href="/en">eng</a><span className="seporator">/</span><a href="/">rus</a></div>
        </div>
      </div>
    </div>
    <h2 className="banner-text--in-small">
      {title_long}
    </h2>
    {location === "/" || location == "/en" ?
      <div className="banner__core">
        <img src={bannerIcon} alt="баннер" />
      </div> : ""
    }
  </div>)
}

export default Banner
