import React from 'react'
import Link from "gatsby-link"

import uslugaIcon from "../../../../static/images/usluga.svg"

const Uslugi = () => (
  <div className="wrapper-uslugi">
    <div className="row">
      <div className="columns">
        <div className="popular-services-wrapper">
          <h2 className="base-caption base-caption--center base-caption--undefined">Popular services</h2>
          <div className="popular-services">
            <Link className="usluga-card" to="/uslugi/blagoustroistvo/2">
              <div className="card-caption">
                <div className="card-caption__img-wrapper">
                  <img src={uslugaIcon} alt="icon1" />
                </div>
                <h4 className="card-caption__name">Разрешение на вырубку и кронирование деревьев</h4>
              </div>
              <div className="usluga-card__links">
                <p className="usluga-card__link">Посмотреть<span className="arrow__right" /></p>
              </div>
            </Link>
            <Link className="usluga-card" to="/uslugi/blagoustroistvo/1">
              <div className="card-caption card-caption-">
                <div className="card-caption__img-wrapper">
                  <img src={uslugaIcon} alt="icon1" />
                </div>
                <h4 className="card-caption__name">Согласование средств наружной информации</h4>
              </div>
              <div className="usluga-card__links">
                <p className="usluga-card__link">Посмотреть<span className="arrow__right" /></p>
              </div>
            </Link>
            <Link className="usluga-card" to="/uslugi/blagoustroistvo/3">
              <div className="card-caption card-caption-">
                <div className="card-caption__img-wrapper">
                  <img src={uslugaIcon} alt="icon1" />
                </div>
                <h4 className="card-caption__name">Согласование архитектурно-градостроительного облика</h4>
              </div>
              <div className="usluga-card__links">
                <p className="usluga-card__link">Посмотреть<span className="arrow__right" /></p>
              </div>
            </Link>
          </div>
          <Link className="btn button-arrow-right" to="/uslugi">All services</Link>
        </div>
      </div>
    </div>
  </div>
)

export default Uslugi
