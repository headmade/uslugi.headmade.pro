import React from 'react'

import './Clients.sass'

const Clients = () => (
  <div className="wrapper-clients">
    <div className="row">
      <div className="columns">
        <section className="clients">
          <h2 className="clients__caption">Система внедрена:</h2>
          <ul className="clients__list">
            <li className="clients__list-item">
              <a href="https://uslugi.kzn.ru/">
                <span className="banner-logo">
                  <h2 className="banner-logo__prefix">Услуги<span className="banner-logo__suffix">Казань</span></h2>
                </span>
                <p>Портал муниципальных услуг города Казани</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

export default Clients