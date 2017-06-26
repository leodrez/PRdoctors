import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='Sentence'>
          <h1>Se siente mal<span className='Color'>?</span></h1>
          <h1>Encuentre un doctor.</h1>
        </div>
        <div className='Forms'>
          <input type='text' value='ingrese especialidad, condicion o 
          nombre del doctor'></input>
          <br />
          <input type='text' value='usar mi localizacion
          actual'></input>
        </div>
        <div className='Button'>
          <button className='Submit'>Buscar!</button>
        </div>
      </div>
    );
  }
}

export default Home;
