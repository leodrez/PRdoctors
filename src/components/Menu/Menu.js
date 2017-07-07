import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-body'>
          <a href='#'>Busqueda</a>
          <a href='#'>Acerca de</a>
          <a href='#'>Contactenos</a>
          <a href='#'>Desarrollador</a>
          <a href='#'>Disclaimer</a>
          <a href='#'>Privacy & Terms</a>
        </div>
      </div>
    );
  }
}

export default Menu;
