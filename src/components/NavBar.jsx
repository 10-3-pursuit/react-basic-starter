import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="fixed z-10 inset-y-5 left-5">
      <div
        // style={{
        //   backgroundImage:
        //     "url('https://res.cloudinary.com/dvmczcg3f/image/upload/c_crop,w_2000,h_2000,x_0,y_0,ar_1:1/v1716061599/6709086_fkopez.jpg')",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   width: "100%",
        //   height: "100vh",
        // }}
        className={`bg-black/90 rounded-xl flex flex-col h-full ${
          collapsed ? "w-0" : "w-64"
        } transition-all duration-300 ease-in-out`}
      >
        <Link
          to={"/"}
          className={`py-6 text-center rounded-t-xl bg-black text-3xl text-white font-semibold  ${
            collapsed ? "hidden" : ""
          }`}
        >
          Smart Waste
        </Link>
        <div className="flex flex-col">
          <button
            disabled={collapsed}
            className={`bg-white py-6 hover:bg-black hover:text-white font-semibold ${
              collapsed ? "hidden" : ""
            }`}
          >
            About
          </button>
          <button
            disabled={collapsed}
            className={`bg-green-300 py-6 hover:bg-black hover:text-white font-semibold ${
              collapsed ? "hidden" : ""
            }`}
          >
            Composting
          </button>
          <button
            disabled={collapsed}
            className={`bg-amber-300 py-6 hover:bg-black hover:text-white font-semibold ${
              collapsed ? "hidden" : ""
            }`}
          >
            Special & E-Waste
          </button>
          <button
            disabled={collapsed}
            className={`bg-red-300 py-6 hover:bg-black hover:text-white font-semibold ${
              collapsed ? "hidden" : ""
            }`}
          >
            Sharps & Medical Waste
          </button>
          <button
            disabled={collapsed}
            className={`bg-blue-300 py-6 hover:bg-black hover:text-white font-semibold ${
              collapsed ? "hidden" : ""
            }`}
          >
            Recycling
          </button>
          <button
            disabled={collapsed}
            className={`bg-purple-300 py-6 hover:bg-black hover:text-white font-semibold ${
              collapsed ? "hidden" : ""
            }`}
          >
            The Team
          </button>
          <div
            className={`text-white text-center mt-9 ${
              collapsed ? "hidden" : ""
            }`}
          >
            &copy; 2024 Smart Waste Inc.
          </div>
        </div>
      </div>
      <button
        onClick={toggleNavbar}
        //   className="fixed bottom-4 left-4 bg-black text-white p-2 rounded-full border-4 border-solid border-red-300"
        className="fixed bottom-5 left-5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold p-1 rounded-xl"
      >
        <span class="flex w-full bg-gray-900 text-white rounded-lg p-2">
          Toggle Nav
        </span>
      </button>
    </div>
  );
};

export default NavBar;
