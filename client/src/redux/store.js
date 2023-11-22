// import cartReducer from "./cartReducer";
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);
// const persistedWishlistReducer = persistReducer(persistConfig, wishlistReducer);

// export const store = configureStore({
//   reducer: {
//     cart: persistedCartReducer,
//     wishlist: persistedWishlistReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),

// });

// export let persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
