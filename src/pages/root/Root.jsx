import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Root = () => {
    return (
            <div>

        <div className="min-h-screen bg-[#12181B] text-white">
            <Outlet/>
        </div>
        <Footer/>
            </div>
    );
};

export default Root;