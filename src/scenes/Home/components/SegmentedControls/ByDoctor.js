import React, { Component } from 'react';

class ByDoctor extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      search: '' 
    };

    this._updateSearch = this._updateSearch.bind(this);
  }

  render() {
    return (
      <div className='ByDoctor'>
        <input type='text' 
          value={ this.state.search }
          onChange={ this._updateSearch } 
        />
      </div>
    ); 
  }

  _updateSearch(event) {
    this.setState({ search: event.target.value });
  }
}

export default ByDoctor;

