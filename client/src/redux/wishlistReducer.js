// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: [],
// };

// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     setWishlist: (state, action) => {
//       state.wishlist = action.payload;
//     },
//     addToWishlist: (state, action) => {
//       state.wishlist.push(action.payload);
//     },
//     removeFromWishlist: (state, action) => {
//       state.wishlist = state.wishlist.filter(
//         (item) => item._id !== action.payload
//       );
//     },
//     emptyWishlist: (state, action) => {
//       state.wishlist = [];
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist, emptyWishlist, setWishlist } =
//   wishlistSlice.actions;

// export default wishlistSlice.reducer;
