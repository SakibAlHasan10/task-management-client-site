import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Root = () => {
  return (
    <div>
        <Navbar/>
      <div className="min-h-screen bg-[#12181B] text-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
