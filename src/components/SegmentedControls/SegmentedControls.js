import React, { Component } from 'react';
import './SegmentedControls.css';

class SegmentedControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  render () {
    return (
      <div className='SegmentedControls'> 
        <form>
          <input 
            type='radio'
            name='options'
            id='speciality'
            />
          <input 
            type='radio'
            name='options'
            id='doctor'
            />
          <input type='submit' value='Buscar!' />
        </form>
      </div>
    );
  }
}

export default SegmentedControls;
