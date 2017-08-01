import React, { Component } from 'react';
import DocForm from '../../components/Forms/DocForm';
import SegmentedControls from '../../components/SegmentedControls/SegmentedControls';
//import LocationForm from '../Forms/LocationForm'
import './Home.css';

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
        <SegmentedControls />
      </div>
    );
  }
}

export default Home;

        //<div className='Forms'>
         // <DocForm />
        //</div>
