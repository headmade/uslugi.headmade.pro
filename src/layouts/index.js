import React from 'react'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import Footer from '../components/Footer'

import '../style/general.scss'

class Layout extends React.Component {

  render(){
    const { children, data } = this.props
    const location = this.props.location.pathname
    const lang = location === "/en/" ? "en" : "ru"

    const description = {
      ru: "Информационная система органов исполнительной власти, обеспечивающая автоматизацию административных процедур по предоставлению государственных и муниципальных услуг",
      en: "Information system for municipal and goverment authorities, providing automatization of administrative procedures for fovernment and monicipal services."
    }[lang]

    const title_page = {
      ru: "ИС Услуги - Информационная система органов исполнительной власти",
      en: "IS Service - Information system for municipal and goverment authorities",
    }[lang]

    return(
      <div className="root-wrapper">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'og:description', content: description},
            { name: 'description', description},
            { name: 'keywords', content: 'sample, something' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { property: 'og:title', content: title_page},
            { property: 'og:image', content: 'img/logo.png' },
          ]}
        />
        <Banner location={location} />
        {children()}
        <Footer location={location}/>
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    sitePage{
      path
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
