import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function NavBar() {
  return (
    <div>
      <nav className=" container mx-auto h-[60px] md:h-[70px] flex justify-between items-center">
        <h1 className=" text-lg md:text-2xl font-semibold cursor-pointer">
          Portfolio
        </h1>
        <ul className=" hidden md:flex items-center gap-5 text-lg">
          <li className=" hover:text-[#23edff]">About me</li>
          <li className=" hover:text-[#23edff]">Services</li>
          <li className=" hover:text-[#23edff]">Projects</li>
          <li className=" hover:text-[#23edff]">Contact</li>
        </ul>
        <HiOutlineMenuAlt3 size={25} className=" md:hidden" />
      </nav>
    </div>
  );
}

export default NavBar;
