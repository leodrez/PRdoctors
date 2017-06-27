import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-body'>
          <button>Busqueda</button>
          <button>Acerca de</button>
          <button>Contactenos</button>
          <button>Desarrollador</button>
          <button>Disclaimer</button>
          <button>Privacy & Terms</button>
        </div>
      </div>
    );
  }
}
