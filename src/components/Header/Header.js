import React, { Component } from 'react';
import icon from '../../images/menu.svg'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Pr-doctors'>
          <h1><span className='Yellow'>PR</span> doctors</h1>
        </div>
        <div className='Menu-btn'>
          <i className="material-icons">menu</i>
        </div>
      </div>
    );
  }
}

export default Header;
