import { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import logo from "../src/Components/Header/img/logo-black.png";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/Home/HomePage";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import CartPage from "./Pages/CartPage/CartPage";
import "./App.css";
export const WishlistContext = createContext(null);

function App() {
  const initialState = {
    productWishlist: [],
  };
  const wishlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TO_WISHLIST":
        return { productWishlist: [...state.productWishlist, payload] };
      case "REMOVE_FROM_WISHLIST":
        break;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (props) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: props });
  };

  const removeFromWishlist = () => {
    dispatch({ type: "REMOVE_FROM_WISHLIST" });
  };

  const value = {
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
    productWishlist: state.productWishlist,
  };
  return (
    <div className="App">
      <WishlistContext.Provider value={value}>
        <Header img={logo} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/WishlistPage" element={<WishlistPage />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Route>
        </Routes>
      </WishlistContext.Provider>
    </div>
  );
}

export default App;
