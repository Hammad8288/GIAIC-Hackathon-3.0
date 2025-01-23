import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favouritesReducer from "./favouriteSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favouritesReducer,
    search : searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
