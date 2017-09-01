import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super (props);

    this.state = {
    };
  }

  render() {
    return (
      <div className='Home'>
        <div className='Sentence'>
          <h1>Se siente mal<span className='Color'>?</span></h1>
          <h1>Encuentre un doctor.</h1>
        </div>
      </div>
    );
  }
}

export default Home;

