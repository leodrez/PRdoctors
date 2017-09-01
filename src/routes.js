import React, { Component } from 'react';
import Home from './scenes/Home/index.js';

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
          <Route path='/' component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
