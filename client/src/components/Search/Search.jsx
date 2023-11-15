import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import CloseIcon from "@mui/icons-material/Close";
import "./Search.css";
const Search = ({ toggle }) => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState();

  const handleClick = () => {
    setUrl(
      import.meta.env.VITE_API_URL +
        "/products?populate=*&filters[title][$contains]=" +
        query
    );
  };
  const { data, isLoading, isError } = useFetch(url);
  return (
    <div className="search-container">
      <div className="input-wrapper">
        <div className="input">
          <input
          className="query-input"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleClick}>Search</button>
        </div>
        <div className="close">
          <button className="close-btn" onClick={toggle}>
            <CloseIcon />
          </button>
        </div>
      </div>
      {data?.length !== 0 ? (
        <div className="search-results">
          {data?.map((item) => (
            <Card key={item.id} item={item} close={() => toggle()} />
          ))}
        </div>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default Search;
