import React, { useState } from "react";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <header className="bg-sky-950 text-white">
        <nav className="flex items-center justify-between px-12 h-16 lg:gap-8">
          <a
            href="#"
            className="text-2xl font-bold border-2 px-2 py-1 whitespace-nowrap"
          >
            {" "}
            LOGO HERE
          </a>
          <div
            className={`${
              collapse ? "top-16" : ""
            } absolute -top-full left-0 max-lg:bg-sky-950 w-full flex flex-col gap-6 items-center py-2 text-lg font-bold lg:static lg:flex-row lg:justify-between`}
          >
            <ul className="flex flex-col gap-6 items-center lg:flex-row lg:gap-8">
              <li className="hover:text-cyan-600">Home</li>
              <li className="hover:text-cyan-600">About us</li>
              <li className="hover:text-cyan-600">Contact us here</li>
              <li className="hover:text-cyan-600">Career</li>
              <li className="hover:text-cyan-600">Blogs</li>
            </ul>
            <div className="flex flex-col gap-6 items-center lg:flex-row lg:gap-8">
              <button className="">Sign In</button>
              <button className="bg-cyan-600 py-1 px-2 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <i
              onClick={() => {
                setCollapse(!collapse);
              }}
              className="fa-lg fa-solid fa-bars "
            ></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
