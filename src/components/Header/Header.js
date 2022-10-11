import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../localImg/logo.png";

const Header = () => {
  return (
    <header className="bg-cyan-50 shadow-lg py-5">
      <div className="navbar flex justify-between items-center">
        <Link to={"/"} className="flex items-center">
          <img className="w-10 h-10 mr-1" src={logo} alt="" />
          <h1 className="text-xl text-cyan-900 uppercase font-semibold ">
            IQ Test
          </h1>
        </Link>

        <div>
          <div className="hidden md:inline-block">
          <div className="list-none text-cyan-500 font-semibold gap-4 flex justify-center">
            <li className="p-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-800" : undefined
                }
                to={"/home"}
              >
                Home
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-800" : undefined
                }
                to={"/analytics"}
              >
                Analytics
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-800" : undefined
                }
                to={"/blog"}
              >
                Blog
              </NavLink>
            </li>
          </div>
          </div>

          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn text-cyan-500 btn-ghost">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="p-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-800" : undefined
                }
                to={"/home"}
              >
                Home
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-800" : undefined
                }
                to={"/analytics"}
              >
                Analytics
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-800" : undefined
                }
                to={"/blog"}
              >
                Blog
              </NavLink>
            </li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
