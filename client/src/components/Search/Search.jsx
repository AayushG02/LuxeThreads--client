import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./Search.css";

const Search = ({ toggle }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/products?name=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="input-wrapper">
        <input
          className="query-input"
          type="text"
          placeholder="Enter product name"
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;

{
  /* <div className="close">
    <button className="close-btn" onClick={toggle}>
      <CloseIcon />
    </button>
  </div> */
}
