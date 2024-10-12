import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navabr/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-5 md:mx-auto  md:container  mt-[50px] mb-[470px] md:mb-[270px] k px-2">
        <Outlet />
      </div>

        <Footer />
    </>
  );
};
export default Layout;
