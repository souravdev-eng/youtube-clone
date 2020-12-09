import React, { Component } from 'react';

export class SearchBar extends Component {
  state = { term: '' };

  onInputChanged = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input type='text' value={this.state.term} onChange={this.onInputChanged} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
// AIzaSyDl_DruuOusutTFXwuJPBlgiHLgdPE5JsM;
