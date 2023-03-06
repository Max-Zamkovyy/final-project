import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/Home/HomePage";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/WishlistPage" element={<WishlistPage />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
