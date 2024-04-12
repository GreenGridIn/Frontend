import React, { useState } from "react";
import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { GiPaperWindmill } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";
function Navbar() {
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/prediction");
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-10 w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
        <nav className="container flex items-center gap-12 px-4 py-8">
          <NavLink to={"/"}>
            <GiPaperWindmill className="text-5xl text-green-700" />
          </NavLink>
          <div className="flex items-center justify-between w-full">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to={"/"}
                  className="text-lg text-purple-100 capitalize font-semibold hover:underline tracking-widest"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="text-lg text-purple-100 capitalize font-semibold hover:underline tracking-widest"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="text-lg text-purple-100 capitalize font-semibold hover:underline tracking-widest"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="pl-8">
              <Button className="rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-100 delay-75 ease-in-out bg-gradient-to-br from-white via-green-300 hover:via-green-500 to-green-600 hover:to-green-900" onClick={(e)=>handleClick(e)}>
                <FaHandHoldingDollar className="text-yellow-600 text-xl animate-bounce " />
                <span className="text-black">Get Started!</span>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
