import React, { useState, MouseEvent } from "react";
import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { GiPaperWindmill } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import ResponsiveNavbar from "./ResponsiveNavbar";
function Navbar() {
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/prediction");
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-10 w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
        <nav className="container flex items-center gap-12 px-4 py-4">
          <NavLink to={"/"}>
            <GiPaperWindmill className="text-5xl text-green-700" />
          </NavLink>
          <div className="flex items-center justify-end w-full">
            <ul className="flex items-center gap-4 lg:gap-8 ">
              <li>
                <NavLink
                  to={"/"}
                  className="text-sm lg:text-lg text-purple-100 capitalize font-semibold hover:underline tracking-widest"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="text-sm lg:text-lg text-purple-100 capitalize font-semibold hover:underline tracking-widest"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="text-sm lg:text-lg text-purple-100 capitalize font-semibold hover:underline tracking-widest"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
