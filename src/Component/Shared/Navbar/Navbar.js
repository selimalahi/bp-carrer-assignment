import React from "react";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import img from '../../../assetes/short-logo (1).png';
// import './Navbar.css'

const Navbar = () => {
  const menuItem = (
    < >
      
      <li><Link to="/" className="text-lg font-bold">Home</Link></li>
      <li><Link to="/" className="text-lg font-bold">Privacy Policy</Link></li> 
      <li><Link to="/" className="text-lg font-bold">Terms Condition</Link></li>
      <li><Link to="/" className="text-lg font-bold">About Us</Link></li>
      <li><Link to="/contract" className="text-lg font-bold">Contact Us</Link></li>
      <li><Link to="/" className="text-lg font-bold">Advertise</Link></li>
      <Link to="/"><button className="btn btn-active btn-primary mt-0">Join Us</button></Link>
      
    </>
  );

  return (    
    <div className="navbar bg-base-100 flex justify-between pr-0 container mx-auto">
      <div className="navbar-start">
        <img src={img} alt="" className="w-30 h-20" />
      </div>
      <div className="navbar-end lg:hidden ">
        <div className="dropdown dropdown-end pr-0">
          <label tabIndex={0} className="btn btn-ghost">
            <FcMenu size={24} />
          </label>
          <ul className="menu menu-compact dropdown-content mt-10 p-0 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 pr-10">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;



