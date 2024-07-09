import './SearchBar.css';
import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
    } else {
      fetchSuggestions(searchTerm);
    }
  }, [searchTerm]);

  const fetchSuggestions = async (searchTerm) => {
    try {
      // const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
      const url = `https://swapi.dev/api/people/?search=${searchTerm}`;

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        const formattedSuggestions = data.results.map((item, index) => ({
          ...item,
          id: index, // Add a unique id to each item
        }));
        console.log('star wards data response: ', data);
        setSuggestions(formattedSuggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.log('Error fetching suggestions:', error);
    }
  };

  const handleOnSearch = (string) => {
    setSearchTerm(string);
  };

  const handleOnHover = (item) => {
    console.log('Item hovered:', item);
  };

  const handleOnSelect = (item) => {
    console.log('Item selected:', item);
  };

  const handleOnFocus = () => {
    console.log('The search input is focused');
  };

  const handleOnClear = () => {
    console.log('The search input is cleared.');
    setSuggestions([]);
  };

  return (
    <div className='search-bar-container'>
      <ReactSearchAutocomplete
        items={suggestions}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        placeholder='Search...'
      />
    </div>
  );
}

export default SearchBar;
