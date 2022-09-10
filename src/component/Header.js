import React, { useState } from "react";
import "animate.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {opened && (
        <div className="flex">
          {" "}
          <div className="w-[80%] animate-slide-in   h-screen top-0 fixed z-50 bg-[#210045]">
            <div className="flex flex-col space-y-10 p-6 ">
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
          <div className="w-full bg-black opacity-60 top-0 fixed z-40 h-screen"></div>
        </div>
      )}
      {opened ? (
        <div
          onClick={() => setOpened(!opened)}
          className="right-[17px] top-3 fixed z-50 block md:hidden lg:hidden"
        >
          <div className="text-white  text-3xl font-bold">
            <IoMdClose />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setOpened(!opened)}
          className="right-[17px] top-3 fixed z-50 block md:hidden lg:hidden"
        >
          <div className="text-white  text-3xl font-bold">
            <GiHamburgerMenu />
          </div>
        </div>
      )}

      <div className="hidden md:block lg:block">
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
    </>
  );
}

export default Header;
