import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocForm from '../Forms/DocForm'
//import LocationForm from '../Forms/LocationForm'
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
          <DocForm />
        </div>
      </div>
    );
  }
}

export default Home;
