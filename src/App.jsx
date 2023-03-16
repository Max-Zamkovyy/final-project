import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import logo from "../src/Components/Header/img/logo-black.png";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/Home/HomePage";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import CartPage from "./Pages/CartPage/CartPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header img={logo} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/WishlistPage" element={<WishlistPage />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
