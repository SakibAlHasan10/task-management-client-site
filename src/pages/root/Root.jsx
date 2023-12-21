import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="min-h-screen bg-[#12181B] text-white">
            
            <Outlet/>
        </div>
    );
};

export default Root;