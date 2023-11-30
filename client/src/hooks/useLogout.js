import { useDispatch } from "react-redux";
import { resetUser } from "../redux/userReducer";
import { resetCart } from "../redux/cartReducer";
export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch(resetUser());
    dispatch(resetCart());
  };
  return { logout };
};
