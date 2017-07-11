import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
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
              <li><Link to='/home'>Busqueda</Link></li>
              <li><Link to='/about'>Acerca de</Link></li>
              <li><Link to='/contact'>Contactenos</Link></li>
              <li><Link to='/disclaimer'>Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Menu;
