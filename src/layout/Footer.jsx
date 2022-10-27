import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import {Button} from "../components/Button";
import {Nosotros} from "../components/Nosotros";
import logolinkedin from "../images/linkedin-logo.png";
import logoface from "../images/facebook-logo.png";

import './Footer.css';


class Footer extends Component{
  state = {clicked : false}
  
  handleClick = () => {
    this.setState ({ clicked: !this.state.clicked})
  }

  render(){
    const MenuItem = MenuItems[0]
    return(
      <nav className='FooterItems'>

        <div>
            <ul>
                <li><a href="https://www.facebook.com/VwareSolutions">
                        <img src={logoface} height="20" width="22" />
                    </a>
                </li>
                <li><a href="https://mx.linkedin.com/">
                        <img src={logolinkedin} height="20" width="20" />
                    </a>
                </li>
            </ul>
        </div>

        <div className='footer-menu'>
          <h1 className="footer-logo"></h1>
        </div>
        
      <Button onClick={this.handleClick}>Nosotros</Button>
      </nav>
    )
  }
}

export default Footer;