import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import SearchNav from "./Shared/Navbar/SearchNav";

const Root = () => {
    return (
        <div className="border-x-4 border-sky-500 relative">
            <Navbar /> <SearchNav/>
            <div className="min-h-screen z-50">
                <Outlet />
            </div>
            <div className="z-10">
                <Footer />
            </div>
        </div>
    );
};

export default Root;