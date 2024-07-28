import React from "react";
import bannerBackground from "../../assets/image/bannerbackground.png";
import logo from "../../assets/image/logo2.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen relative">
      <img
        src={bannerBackground}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="flex flex-col items-center absolute inset-0 z-10 top-48 sm:w-3/12 w-3/4 mx-auto">
        <NavLink to="/">
          <img src={logo} alt="" className="w-48" />
        </NavLink>
        <form action="" className="flex flex-col gap-5 my-5 w-full text-xs">
          <input
            type="text"
            className="px-2 py-3 rounded-md bg-white outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            className="px-2 py-3 rounded-md bg-white outline-none"
            placeholder="Password"
          />

          <button className="bg-red-500 py-3 text-white rounded-md hover:bg-red-500/80">
            Sign In
          </button>
          <NavLink
            to="/registration"
            className="text-red-500 font-medium text-center cursor-pointer"
          >
            Create a new account
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
