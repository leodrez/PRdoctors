import React, { Component } from 'react';

import BySpecialty from './BySpecialty.js';
import ByDoctor from './ByDoctor';

class SegmentedControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specialtyOn: false,
      doctorOn: false
    };

    this._toggleSpecialty = this._toggleSpecialty.bind(this);
    this._toggleDoctor = this._toggleDoctor.bind(this);
  }

  render () {
    return (
      <div className='SegmentedControls'> 
        <div className='Control-btns'>
          <button onClick={ this._toggleSpecialty }>Especialidad</button>
          <button onClick={ this._toggleDoctor }>Doctor</button>
        </div>
        <div className='Searches'>
          { this.state.specialtyOn ? <BySpecialty /> : null }
          { this.state.doctorOn ? <ByDoctor /> : null }
        </div>
      </div>
    );
  }
  
  _toggleSpecialty() {
    this.setState(prevState => ({
      specialtyOn: !prevState.specialtyOn, 
      doctorOn: false
    }));
  }

  _toggleDoctor() {
    this.setState(prevState => ({
      doctorOn: !prevState.doctorOn, 
      specialtyOn: false
    }));
  }
}

export default SegmentedControls;
