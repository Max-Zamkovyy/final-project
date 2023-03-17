import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reduser";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
