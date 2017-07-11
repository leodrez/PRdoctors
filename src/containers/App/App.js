import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  constructor() {

    super();

    this.state = { showingMenu: false };

    this._toggleMenu = this._toggleMenu.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header _toggleMenu={ this._toggleMenu } />
        { this.state.showingMenu ? <Menu _toggleMenu={ this._toggleMenu } /> : <Body /> }
        <Footer />
      </div>
    );
  }

  _toggleMenu() {
    this.setState({ showingMenu: !this.state.showingMenu }); 
  }
}

export default App;
