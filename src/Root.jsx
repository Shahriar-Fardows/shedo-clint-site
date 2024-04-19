import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="relative">
           <div  className=" fixed  top-0 w-full z-50">
           <Navbar /> 
           </div><br /><br /> <br /><br />
            <div className="min-h-screen   border-x-4 border-sky-500 container mx-auto">
                <Outlet />
            </div>
            <div className="z-10">
                <Footer />
            </div>
        </div>
    );
};

export default Root;