import React from 'react'

import Nav from '../components/Nav'
import Info from '../components/Info'
import How from '../components/How'
import CrossBrowser from "../components/CrossBrowser"
import Docs from "../components/Docs"
import Price from "../components/Price"
import Clients from "../components/Clients"
import Uslugi from "../components/Uslugi"
import Modules from "../components/Modules"
import Help from "../components/Help"

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
        <CrossBrowser/>
        <Modules/>
        <Price/>
        <Help/>
      </div>
    )
  }
}

export default Content
