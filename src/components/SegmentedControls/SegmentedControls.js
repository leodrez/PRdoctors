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
        <button>Especialidad</button>
        <button>Doctor</button>
      </div>
    );
  }
}

export default SegmentedControls;
