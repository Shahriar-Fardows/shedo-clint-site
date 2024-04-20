import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="relative">
           <div  className=" fixed  top-0 w-full z-50 mb-10">
           <Navbar /> 
           </div> 
            <div className="min-h-screen py-10  lg:py-24  container mx-auto">
                <Outlet />
            </div>
            <div className="z-10">
                <Footer />
            </div>
        </div>
    );
};

export default Root;