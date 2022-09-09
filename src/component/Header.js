import React from "react";
import "animate.css";

function Header() {
  return (
    <div className="hidden md:hidden lg:block">
     


      <div className="bg-transparent   bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  flex justify-between fixed w-full p-5 z-20 top-0">
        <div></div>
        <div className="flex justify-between w-[50%]">
          <p className="animate__animated animate__slideInRight text-xl font-semibold text-white cursor-pointer  hover:text-[peru]">
            Home
          </p>
          <p className=" animate__animated animate__slideInRight text-xl font-semibold text-white cursor-pointer hover:text-[peru]">
            About
          </p>
          <p className=" animate__animated animate__slideInRight text-xl font-semibold text-white cursor-pointer hover:text-[peru]">
            Portfolio
          </p>
          <p className=" animate__animated animate__slideInRight text-xl font-semibold text-white cursor-pointer hover:text-[peru]">
            Reviews
          </p>
          <p className=" animate__animated animate__slideInRight text-xl font-semibold text-white cursor-pointer hover:text-[peru]">
            Contact Me
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
