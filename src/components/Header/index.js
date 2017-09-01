import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Pr-doctors'>
          <h1><span className='Black'>PR</span> doctors</h1>
        </div>
        <div className='Menu-btn'>
          <button onClick={this.props._toggleMenu}>
            <i className="material-icons">{ this.props.icon }</i>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
