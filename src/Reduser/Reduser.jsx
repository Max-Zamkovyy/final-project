/*
 export const wishlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TO_WISHLIST":
        return { productWishlist: [...state.productWishlist, payload] };
      case "REMOVE_FROM_WISHLIST":
        const filteredProducts = state.productWishlist.filter(
          (product) => product.id !== payload
        );
        return {
          productWishlist: filteredProducts,
        };
      default:
        return state;
    }
  };

 export const initialState = {
    productWishlist: [],
  };
*/

import { createSlice} from "@reduxjs/toolkit";

export const initialState = {
  productWishlist: [],
};

export const wishlistReducer = createSlice({
  name: 'product',
  initialState: initialState,
  reducers:{
    addToWishlist:(state, action)=>{
      state.productWishlist.push(action.payload);
    },
    removeFromWishlist:(state, action)=>{
      state.productWishlist = state.productWishlist.filter(
        (product) => product.id !== action.payload
      );
    }
    
  }
})

export const {addToWishlist, removeFromWishlist} = wishlistReducer.actions;
export default wishlistReducer.reducer;