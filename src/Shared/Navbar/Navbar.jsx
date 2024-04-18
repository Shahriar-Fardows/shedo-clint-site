import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo/logo.png'
import { BsCart2 } from "react-icons/bs";


const Navbar = () => {

    const navLink = <>
        <li>  <NavLink to='/'> Home </NavLink> </li>
        <li>  <NavLink to='/all_Product'> All Product </NavLink> </li>
        <li>  <NavLink to='/best_selling'> Best Selling </NavLink> </li>
    </>


    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 right-0 lg:px-28 ">
            <div className="navbar-start">
                <div className="drawer lg:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content lg:hidden">

                        <label htmlFor="my-drawer" className="drawer-button">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {navLink}
                        </ul>
                    </div>
                </div>

                <img className='w-32 px-4' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end px-5 gap-5">
                <BsCart2 className=' text-2xl ' />
                <Link to='/login' className="btn md:w-32 btn-outline">Login</Link>

            </div>
        </div>
    );
};

export default Navbar;