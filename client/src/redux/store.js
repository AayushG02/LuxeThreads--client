import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  preloadedState: {
    user: loadFromLocalStorage("user"),
    cart: loadFromLocalStorage("cart"),
  },
});
// console.log(store.getState().user.user.user);
// Subscribe to store changes to update localStorage
store.subscribe(() => {
  localStorage.setItem("user", JSON.stringify(store.getState().user));
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});
