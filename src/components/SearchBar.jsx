import React, { useState } from 'react';
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  const onInputChanged = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={term} onChange={onInputChanged} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
// AIzaSyDl_DruuOusutTFXwuJPBlgiHLgdPE5JsM;
