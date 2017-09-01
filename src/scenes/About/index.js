import React, { Component } from 'react';
import './styles.css';

class About extends Component {
  render() {
    return (
      <div className='About'>
        <div className='Title'>
          <h1>Acerca <span className='Color'>de</span></h1>
        </div>
        <div className='Paragraph'>
          <p>Acerca de PR doctors</p> 
        </div>
      </div>
    );
  }
} 

export default About;
