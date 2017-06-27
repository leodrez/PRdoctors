import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import Doctors from '../../components/Doctors/Doctors';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Privacy from '../../components/Privacy/Privacy';
import Disclaimer from '../../components/Disclaimer/Disclaimer';
import NotFound from '../../components/NotFound/NotFound';
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Redirect, 
  Switch 
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' render={() => (
              <Redirect to='/home'/>
            )}/>
            <Route path='/home' component={ Home } />
            <Route path='/doctors' component={ Doctors } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path='/privacy' component={ Privacy } />
            <Route path='/disclaimer' component={ Disclaimer } />
            <Route path='*' component={ NotFound } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
