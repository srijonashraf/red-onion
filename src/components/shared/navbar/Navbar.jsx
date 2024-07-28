import React from "react";
import logo from "../../../assets/image/logo2.png";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mx-4 my-3 max-sm:mx-1 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img src={logo} alt="RED ONION" className="w-24" />
        </NavLink>
      </div>
      <div className="flex items-center gap-5 max-sm:gap-2">
        <p>
          <FiShoppingCart className="text-gray-600" />
        </p>
        <NavLink to="/login">
          <p className="font-medium font-inter text-base">Login</p>
        </NavLink>
        <NavLink to="/registration">
          <button className="px-5 py-2 bg-red-500 text-white font-inter font-semibold rounded-full outline-none hover:bg-red-500/90">
            Sign up
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
