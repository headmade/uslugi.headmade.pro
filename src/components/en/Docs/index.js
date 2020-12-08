import React from 'react'

import pdf from '../../Docs/pdf-icon.svg'
import installDoc from '../../../docs/INSTALL.pdf'
import readmeDoc from '../../../docs/README.pdf'
import supportDoc from '../../../docs/SUPPORT.pdf'
import '../../Docs/Docs.sass'

const Docs = () => (
  <div className="wrapper-docs">
    <div className="row">
      <div className="columns">
        <section className="docs">
          <h2 className="docs__caption">Manuals</h2>
          <ul className="docs__list">
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Installation manual</p>
                <a href={installDoc}>Download</a>
              </div>
            </li>
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Features at a glance</p>
                <a href={readmeDoc}>Download</a>
              </div>
            </li>
            <li className="docs__list-item">
              <div className="wrapper-list-item__img"><img src={pdf} alt="Document" /></div>
              <div className="wrapper-list-item__text">
                <p>Operation manual</p>
                <a href={supportDoc}>Download</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
)

export default Docs
