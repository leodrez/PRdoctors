import React, { Component } from 'react';
import {
  BrowserRouter,
  Link
} from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='Menu'>
          <div className='Menu-body'>
            <ul>
              <li><Link to='/home' onClick={ this.props._toggleMenu }>Busqueda</Link></li>
              <li><Link to='/about' onClick={ this.props._toggleMenu }>Acerca de</Link></li>
              <li><Link to='/contact' onClick={ this.props._toggleMenu }>Contactenos</Link></li>
              <li><Link to='/disclaimer' onClick={ this.props._toggleMenu }>Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Menu;
