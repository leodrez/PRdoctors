import React, { Component } from 'react';
import './DocForm.css';

class DocForm extends Component {
  constructor (props) {
    super (props); 

    this.state = { value: '' };
  }

  render () {
    return (
      <div className='DocForm'>
        <form>
          <lable>
            <input type='text' value='Search' />
          </lable>
          <input type='submit' value='Submit' />
        </form>
      </div>
    ); 
  }
}

export default DocForm;
