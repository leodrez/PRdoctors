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
            <li><Link to="">Busqueda</Link></li>
            <li><Link to="">Acerca de</Link></li>
            <li><Link to="">Contactenos</Link></li>
            <li><Link to="">Desarrollador</Link></li>
            <li><Link to="">Disclaimer</Link></li>
            <li><Link to="">Privacy & Terms</Link></li>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Menu;
