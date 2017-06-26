import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <div className='Privacy-and-terms'>
          <button>
            <span className='Color'>Privacy</span> policy and 
            <span className='Color'> Terms</span> of use Ⓒ2017 PRdoctors
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
