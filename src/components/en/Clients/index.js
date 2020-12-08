import React from 'react'

import '../../Clients/Clients.sass'

const Clients = () => (
  <div className="wrapper-clients">
    <div className="row">
      <div className="columns">
        <section className="clients">
          <h2 className="clients__caption">Our clients:</h2>
          <ul className="clients__list">
            <li className="clients__list-item">
              <a href="https://uslugi.kzn.ru/">
                <span className="banner-logo">
                  <h2 className="banner-logo__prefix">Uslugi<span className="banner-logo__suffix">Kazan</span></h2>
                </span>
                <p>Municipal services of <a href="https://kzn.ru" target="_blank">Kazan, Russia</a></p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

export default Clients
