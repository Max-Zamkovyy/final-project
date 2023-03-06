import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logo from "../Header/img/logo-black.png";


const Layout = () => {
  return (
    <div>
      <Header img={logo} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
