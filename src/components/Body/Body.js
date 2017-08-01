import React, { Component } from 'react';
import Home from '../../containers/Home/Home';
import Doctors from '../../components/Doctors/Doctors';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Disclaimer from '../../components/Disclaimer/Disclaimer';
import NotFound from '../../components/NotFound/NotFound';
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Redirect, 
  Switch 
} from 'react-router-dom';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Body">
          <Switch>
            <Route exact path='/' render={() => (
              <Redirect to='/home'/>
            )}/>
            <Route path='/home' component={ Home } />
            <Route path='/doctors' component={ Doctors } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path='/disclaimer' component={ Disclaimer } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Body;
