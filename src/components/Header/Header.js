import React from "react";
import { NavLink } from "react-router-dom";
import logo from './../localImg/logo.png';

const Header = () => {
  return (
    <header className="bg-cyan-50 z-50  shadow-lg py-5">
      <nav className="flex mx-6 justify-between items-center">
        <div className="flex items-center">
          <img className="w-10 h-10 mr-1" src={logo} alt="" />
          <h1 className="text-xl text-cyan-900 uppercase font-semibold ">IQ Test</h1>
        </div>
        <div className="list-none text-cyan-500 font-semibold gap-4 flex justify-center">
          <li className="p-2">
            <NavLink
            className={({ isActive }) =>
            isActive ? 'text-yellow-800' : undefined
          }
            to={"/home"}>Home</NavLink>
          </li>
          <li className="p-2">
            <NavLink
            className={({ isActive }) =>
            isActive ? 'text-yellow-800' : undefined
          }
            to={"/analytics"}>Analytics</NavLink>
          </li>
          <li className="p-2">
            <NavLink
            className={({ isActive }) =>
            isActive ? 'text-yellow-800' : undefined
          }
            to={"/blog"}>Blog</NavLink>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
