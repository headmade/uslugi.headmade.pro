import React from 'react'

import Nav from '../../components/en/Nav'
import Info from '../../components/en/Info'
import How from '../../components/en/How'
import CrossBrowser from "../../components/en/CrossBrowser"
import Docs from "../../components/en/Docs"
import Price from "../../components/en/Price"
import Clients from "../../components/en/Clients"
import Uslugi from "../../components/en/Uslugi"
//import Modules from "../../components/Modules"
import Help from "../../components/en/Help"

class Content extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll=()=>{
    let banner = document.querySelector('.banner');
    let nav = document.querySelector('.wrapper-nav');
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(banner.clientHeight < scrolled){
      nav && nav.classList.add("fixed")
    }else{
      nav && nav.classList.remove("fixed")
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <Info/>
        <How/>
        <CrossBrowser/>
        <Docs/>
        <Price/>
        <Clients/>
        <Uslugi/>
        {/*<Modules/>*/}
        <Help/>
      </div>
    )
  }
}

export default Content
