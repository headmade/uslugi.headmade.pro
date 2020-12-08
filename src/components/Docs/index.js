import React from 'react'

import pdf from './pdf-icon.svg'
import installDoc from '../../docs/INSTALL.pdf'
import readmeDoc from '../../docs/README.pdf'
import supportDoc from '../../docs/SUPPORT.pdf'
import './Docs.sass'

const Docs = () => (
  <div className="wrapper-docs">
    <div className="row">
      <div className="columns">
        <section className="docs">
          <h2 className="docs__caption">Документация</h2>
          <ul className="docs__list">
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Руководство по установке</p>
                <a href={installDoc}>Скачать</a>
              </div>
            </li>
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Описание системы</p>
                <a href={readmeDoc}>Скачать</a>
              </div>
            </li>
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Руководство по эксплуатации</p>
                <a href={supportDoc}>Скачать</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

export default Docs