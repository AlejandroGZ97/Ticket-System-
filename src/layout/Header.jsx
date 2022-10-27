import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import {Button} from "../components/Button";
import {Nosotros} from "../components/Nosotros";
import logovware from "../images/spain-flag.png";

import './Header.css';


class Header extends Component{
  state = {clicked : false}
  
  handleClick = () => {
    this.setState ({ clicked: !this.state.clicked})
  }

  render(){
    const MenuItem = MenuItems[0]
    return(
      <nav className='HeaderItems'>
          
        <div>
          <a className={MenuItem.cName} href={MenuItem.url}>
            {MenuItem.tittle}
          </a>
        </div>
        
        <div className='header-menu'>
          <h1 className="header-logo"><img src={logovware} height="18" width="25"></img></h1>
        </div>
      </nav>
    )
  }
}

export default Header;