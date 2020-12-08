import React from 'react'

import segment1 from '../../Info/segment-item-1-full.svg'
import segment2 from '../../Info/segment-item-2-full.svg'
import segment3 from '../../Info/segment-item-3-full.svg'
import minkomsvaz from '../../Info/logo-minkomsvaz.png'
import '../../Info/Info.sass'

const Info = () => {
  return (
    <div id="info" className="wrapper-info">
      <div className="row">
        <div className="columns">
          <section className="info">
            <h1 className="info__caption">What is IS "Services"?</h1>
            <div className="info__segment info__segment-1">
              <div className="info__segment-wrapper-img">
                <img src={segment1} alt="Information system" />
              </div>
              <div className="info__segment-text">
                <h2 className="info-segment-title">Information system</h2>
                <ul className="info__segment-list">
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Unified process of serving
                    </a>
                    <p>
                      A way to increase both speed and quality of municipal services with reuse of familiar instruments,
                      and a "single way" for all service types.
                    </p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Full cycle of service providing
                    </a>
                    <p>
                      Entire process of all services happens in IS "Services" only,
                      starting from service request and ending with service result providing
                    </p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Monitoring of services and results
                    </a>
                    <p>
                      IS Services provides all necessary tools for monitoring of process of service providing process and monitoring of results quality.
                      Additionally, it provides tools to generate required state reports.
                    </p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Matches design rules for official services site
                    </a>
                    <p>
                      Use of common design rules allows to easy both their use and development.
                      Common patterns of notifications, communications and usee supports makes users to feel familiar with IS Services from the very first visit.
                    </p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="https://reestr.minsvyaz.ru/reestr/125814/" target="_blank"
                       className="info__segment-list-item-link info__segment-list-item-link-color1">
                  <span className="info__segment-list-item-icon">
                    <img src={minkomsvaz} alt="logo-minkomsvaz" />
                  </span>
                      Included in the official state "Unified Register of Russian Programs"
                    </a>
                    <p>
                      This means that IS Services is a legal system to provide municipal services in Russian Federation.
                      <br />
                      <a href="https://reestr.minsvyaz.ru/reestr/125814/" target="_blank">
                        <b>Registry number: </b>4251
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info__segment info__segment-2">
              <div className="info__segment-wrapper-img">
                <img src={segment2} alt="Digital economics" />
              </div>
              <div className="info__segment-text">
                <h2 className="info-segment-title">Digital economics</h2>
                <ul className="info__segment-list">
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Registries
                    </a>
                    <p>
                      Uses decentralized distributed registries and rights authorities
                    </p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Legally significant digital interaction
                    </a>
                    <p>
                      The methods of independent trusted fixation and provision of interested parties with legal facts related to digital remote interactions and digital documents are used (services of a trusted third party).
                    </p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Management
                    </a>
                    <p>
                      Participates in the concept of state administration including control and supervisory activities.
                    </p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Digital ecosystem
                    </a>
                    <p>
                      Participates in creating an ecosystem of the Russian Federation's digital economy,
                      where data in digital form is a key factor.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info__segment info__segment-3">
              <div className="info__segment-wrapper-img">
                <img src={segment3} alt="The legislative framework" />
              </div>
              <div className="info__segment-text">
                <h2 className="info-segment-title">The legislative framework</h2>
                <ul className="info__segment-list">
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Федеральный закон от 27.07.2010 №210-ФЗ
                    </a>
                    <p>Об организации предоставления государственных и муниципальных услуг</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Постановление Правительства РФ от 26.03.2016 №236
                    </a>
                    <p>О требованиях к предоставлению в электронной форме государственных и муниципальных услуг</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Федеральный закон от 06.04.2011 №63-ФЗ
                    </a>
                    <p>Об электронной подписи</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Постановление Правительства РФ от 25.01.2013 №33
                    </a>
                    <p>Об использовании простой электронной подписи при оказании государственных и муниципальных услуг</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Постановление Правительства РФ от 24.10.2011 №861
                    </a>
                    <p>О федеральных государственных информационных системах, обеспечивающих предоставление в
                      электронной
                      форме государственных и муниципальных услуг</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Федеральный закон от 27.07.2006 №149-ФЗ
                    </a>
                    <p>Об информации, информационных технологиях и о защите информации</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Распоряжение от 28.07.2017 года №1632-р
                    </a>
                    <p>Об утверждении программы «Цифровая экономика Российской Федерации»</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Приказ ФСТЭК России от 11.02.2013 №17
                    </a>
                    <p>Об утверждении «Требований о защите информации, не составляющей государственную тайну,
                      содержащейся в
                      государственных информационных системах»</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Федеральный закон от 27.07.2006 №152-ФЗ
                    </a>
                    <p>О персональных данных</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color3">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color3"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Федеральный закон от 26.12.2008 №294-ФЗ
                    </a>
                    <p>О защите прав юридических лиц и индивидуальных предпринимателей при осуществлении
                      государственного
                      контроля (надзора) и муниципального контроля</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Info
