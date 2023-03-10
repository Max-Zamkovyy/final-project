import { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/Home/HomePage";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import "./App.css";
export const WishlistContext = createContext(null);

function App() {
  const initialState = {
    productWishlist: [],
  };
  const wishlistReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        console.log("ADD_TO_WISHLIST");
        break;
      case "REMOVE_FROM_WISHLIST":
        break;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = () => {
    dispatch({ type: "ADD_TO_WISHLIST"});
  };

  const removeFromWishlist = () => {
    dispatch({ type: "REMOVE_FROM_WISHLIST"});
  };

  const value = {
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
  }
  return (
    <div className="App">
      <WishlistContext.Provider value={{value}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/WishlistPage" element={<WishlistPage />} />
          </Route>
        </Routes>
      </WishlistContext.Provider>
    </div>
  );
}

export default App;
