import React, { Component } from 'react';

import Header from '../../components/Header/index.js';
import Welcome from './components/Welcome/index.js';
import SegmentedControls from './components/SegmentedControls/index.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <SegmentedControls />
      </div>
    );
  }
}

export default Home;

