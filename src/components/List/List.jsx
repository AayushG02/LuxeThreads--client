import "./List.css";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ catId, maxPrice, subCat, sort }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][catogories][id]=${catId}${subCat.map(item=>`&[filters][sub_catogories][id][$eq]=${item}`)}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {error
        ? "something went wrong"
        : loading
        ? "loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};
export default List;
