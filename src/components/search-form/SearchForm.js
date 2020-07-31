import React from "react";

import "./search-form.style.css";

const SearchForm = ({ params, onParamChange }) => {
  return (
    <div className="search-form">
      <form className="form">
        <input
          type="text"
          name="location"
          onChange={onParamChange}
          value={params.location || ""}
          placeholder="Location"
        />
      </form>
    </div>
  );
};

export default SearchForm;
