import './SearchBar.css';
import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function SearchBar() {
  const items = [
    {
      id: 0,
      name: 'nivea',
    },
    {
      id: 1,
      name: 'APPLE',
    },
    {
      id: 2,
      name: 'greyninja',
    },
    {
      id: 3,
      name: 'Balbasaur',
    },
    {
      id: 4,
      name: 'pikachu',
    },
  ];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (item) => {
    console.log('Item hovered:', item);
  };

  const handleOnSelect = (item) => {
    console.log('Item selected', item);
  };

  return (
    <div className='search-bar-container'>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
      />
    </div>
  );
}
export default SearchBar;
