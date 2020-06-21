import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash.debounce';

export const Search: React.FC = () => {
  const { location, push } = useHistory();

  const handleInputChange = debounce(({ target: { value } }: any) => {
    handleAutoPush(value);
  }, 500);

  const handleAutoPush = (value: string) => {
    if (location.pathname === '/search') {
      pushLocation(value);
    }
  };

  const pushLocation = (query: string) => {
    push(`/search?query=${query}`);
  };

  const handleEnterKey = ({ key, target: { value } }: any) => {
    if (key === 'Enter') {
      pushLocation(value);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          e.persist();
          return handleInputChange(e);
        }}
        onKeyPress={(e) => handleEnterKey(e)}
      />
    </>
  );
};
