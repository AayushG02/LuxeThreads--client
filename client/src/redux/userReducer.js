import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: "",
    wishlist: [], // Initialize wishlist as an empty array
    token: "",
  },
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state, action) => {
      state.user = {
        id: "",
        name: "",
        wishlist: [],
        token: "",
      };
    },
    addToWishlist: (state, action) => {
      state.user.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.user.wishlist = state.user.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },
    clearWishlist: (state, action) => {
      state.user.wishlist = [];
    },
  },
});

export const { setUser, resetUser, addToWishlist, removeFromWishlist } =
  userReducer.actions;

export default userReducer.reducer;
