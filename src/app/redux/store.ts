import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favouritesReducer from "./favouriteSlice";
import checkoutReducer from "./checkoutSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favouritesReducer,
    checkout: checkoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
