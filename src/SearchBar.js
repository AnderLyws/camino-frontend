import React from "react";
import "./searchbar.css";

const SearchBox = (props) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={props.placeholder}
      onChange={props.handleSearchChange}
    />
  );
};

export default SearchBox;
