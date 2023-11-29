import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import "./ProductSearch.css";

const ProductSearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("name");
  console.log(searchQuery);
  const url = `${import.meta.env.VITE_API_URL}/products?name=${searchQuery}`;
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <div className="products">
      <h1>Search Results for {searchQuery}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="search-result">
          {data.length !== 0 ? (
            data.map((item) => <Card key={item._id} item={item} />)
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
