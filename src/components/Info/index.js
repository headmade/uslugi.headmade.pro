import React from 'react'

import segment1 from './segment-item-1-full.svg'
import segment2 from './segment-item-2-full.svg'
import segment3 from './segment-item-3-full.svg'
import minkomsvaz from './logo-minkomsvaz.png'
import './Info.sass'

const Info = () => {
  return (
    <div id="info" className="wrapper-info">
      <div className="row">
        <div className="columns">
          <section className="info">
            <h1 className="info__caption">Что такое информационная система "Услуги"?</h1>
            <div className="info__segment info__segment-1">
              <div className="info__segment-wrapper-img">
                <img src={segment1} alt="Информационная система" />
              </div>
              <div className="info__segment-text">
                <h2 className="info-segment-title">Информационная система</h2>
                <ul className="info__segment-list">
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Унифицированный процесс предоставления услуги
                    </a>
                    <p>Возможность повысить скорость и качество предоставления услуг через переиспользование знакомых
                      инструментов а также создания «единого пути» для оказания всех типов услуг.</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Обеспечивает полный цикл предоставления услуги
                    </a>
                    <p>Весь процесс предоставления любой услуги происходит исключительно в ИС Услуги, от подачи
                      заявления до
                      получения результата.</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Контроль процессов и результатов предоставления услуг
                    </a>
                    <p>ИС Услуги имеет всё необходимое для осуществления контроля процесса и качества прадоставления
                      услуг,
                      а так же встроенные инструменты генерации требуемых законом отчётов.</p>

                  </li>
                  <li className="info__segment-list-item">
                    <a href="" className="info__segment-list-item-link info__segment-list-item-link-color1">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color1"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Соответствует правилам дизайна Единого портала Госуслуг
                    </a>
                    <p>Использование единых правил в проектировании государственных сайтов позволяет обеспечить удобство
                      их
                      использования, рост качества предлагаемых на них сервисов, а также доступность коммуникаций,
                      информирования и поддержки пользователей.</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="https://reestr.minsvyaz.ru/reestr/125814/" target="_blank"
                       className="info__segment-list-item-link info__segment-list-item-link-color1">
                  <span className="info__segment-list-item-icon">
                    <img src={minkomsvaz} alt="logo-minkomsvaz" />
                  </span>
                      Внесена в "Единый реестр российских программ"
                    </a>
                    <p>
                      <b>Класс ПО: </b>Системы управления проектами, исследованиями, разработкой, проектированием и
                      внедрением, Информационные системы для решения специфических отраслевых задач, Системы управления
                      процессами организации
                      <br />
                      <a href="https://reestr.minsvyaz.ru/reestr/125814/" target="_blank">
                        <b>Рег. номер ПО: </b>4251
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info__segment info__segment-2">
              <div className="info__segment-wrapper-img">
                <img src={segment2} alt="Цифровая экономика" />
              </div>
              <div className="info__segment-text">
                <h2 className="info-segment-title">Цифровая экономика</h2>
                <ul className="info__segment-list">
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Реестры
                    </a>
                    <p>Использует технологии децентрализованного ведения реестров и удостоверения прав</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Юридически значимое электронное взаимодействие
                    </a>
                    <p>Используются способы независимой доверенной фиксации и предоставления заинтересованным лицам
                      юридических фактов, связанных с электронными дистанционными взаимодействиями, электронными
                      документами
                      (сервисов третьей доверенной стороны).</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Управление
                    </a>
                    <p>Участвует в концепции государственного управления, включая контрольно-надзорную деятельность</p>
                  </li>
                  <li className="info__segment-list-item">
                    <a href="#" className="info__segment-list-item-link info__segment-list-item-link-color2">
                      <svg className="info__segment-list-item-svg info__segment-list-item-svg_color2"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                        <path
                          d="M686.871,881.948V879.04a1.574,1.574,0,0,0-.872-1.379l-2.759-1.453a1.886,1.886,0,0,0-1.744,0l-2.759,1.453a1.575,1.575,0,0,0-.873,1.379v2.908a1.573,1.573,0,0,0,.873,1.379l2.759,1.454a1.891,1.891,0,0,0,1.744,0L686,883.327A1.572,1.572,0,0,0,686.871,881.948Z"
                          transform="translate(-677.875 -876.031)"/>
                      </svg>
                      Цифровая экосистема
                    </a>
                    <p>Участвует в создании экосистемы цифровой экономики Российской Федерации, в которой данные в
                      цифровой
                      форме являются ключевым фактором</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info__segment info__segment-3">
              <div className="info__segment-wrapper-img">
                <img src={segment3} alt="Законодательная база" />
              </div>
              <div className="info__segment-text">
                <h2 className="info-segment-title">Законодательная база</h2>
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