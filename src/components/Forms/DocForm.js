import React, { Component } from 'react';
import './DocForm.css';

class DocForm extends Component {
  constructor (props) {
    super (props); 
  }

  render () {
    return (
    <div className='DocForm'>
        <form>
          <lable>
            Doctor:
            <input type='text' />
          </lable>
            <input type='submit' value='Submit' />
        </form>
      </div>
    ); 
  }
}

export default DocForm;
