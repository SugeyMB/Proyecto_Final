import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSearch} className="d-flex mb-4">
      <Form.Control 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a track..."
      />
      <Button type="submit" variant="primary" className="ms-2">Search</Button>
    </Form>
  );
};

export default SearchBar;
