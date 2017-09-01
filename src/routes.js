import React, { Component } from 'react';

import Home from './scenes/Home/index.js';
import About from './scenes/About/index.js';
import Disclaimer from './scenes/Disclaimer/index.js';

import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/disclaimer' component={ Disclaimer } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
