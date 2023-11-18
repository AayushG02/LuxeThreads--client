import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
const Success = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCart());
  }, []);
  return <div>Success</div>;
};

export default Success;
