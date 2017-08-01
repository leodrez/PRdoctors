import React, { Component } from 'react';

class LocationForm extends Component {
  constructor (props) {
    super (props); 
  }

  render () {
    return (
      <form>
        <lable>
          <input type='text'>
          </input>
        </lable>
      </form>
    ); 
  }
}

export default LocationForm;

// This component should do a search based on users
// location. Showing near doctors
