import React from "react";

const SearchBox = ({ SearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lighhtest-blue rounded-input my-input"
        type="search"
        placeholder="Type here"
        onChange={SearchChange}
      />
    </div>
  );
};

export default SearchBox;
