import React, { useState } from "react";
import BacgroundImage from "../assets/FirstPageWal.png";
import { MdOutlineFlight } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import MainLogo from "../assets/Logo.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("flights");
  return (
    <>
      <div className="flex justify-center w-full">
        <header
          className="bg-cover bg-center rounded-3xl px-5 py-5 "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${BacgroundImage})`,
            height: "599px",
          }}
        >
          <div
            className="flex justify-between items-center flex-col sm:flex-row "
            style={{ border: "2px solid yellow" }}
          >
            {/* leftHeader */}
            <div className="flex flex-col sm:flex-row justify-center gap-7 mb-4 sm:mb-0">
              <div className="flex justify-center gap-1">
                <MdOutlineFlight className="rotate-90 w-4 h-6 text-white" />
                <div
                  className="text-white"
                  style={{ width: "79px", height: "17px" }}
                >
                  Find Flight
                </div>
              </div>

              <div className="flex justify-center gap-1">
                <IoIosBed className=" w-4 h-6 text-white" />
                <div
                  className="text-white"
                  style={{ width: "79px", height: "10px" }}
                >
                  Find Stay
                </div>
              </div>
            </div>
            {/* logo */}
            <div>
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src={MainLogo}
                  alt="Main Logo"
                  style={{ width: "110px", height: "36px" }}
                />
              </div>
            </div>
            {/* HeaderButtons */}
            <div className="gap-2 flex">
              <button className="px-4 py-2  text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300 text-sm">
                Login
              </button>
              <button className="px-4 py-2 bg-slate-300 text-white rounded hover:bg-blue-700 transition duration-300 text-sm ">
                Sign Up
              </button>
            </div>
          </div>
          {/* TextArea */}
          <div className="flex flex-col gap-3  text-white">
            <h3 className="text-5xl">Helping Others</h3>
            <h2 className="text-7xl">LIVE & TRAVEL</h2>
            <h4 className="text-xl">Special offers to suit your plan</h4>
          </div>
          {/* Bottom header */}
          <div
            className="rounded-xl bg-white pt-4 pr-8 pb-8 pl-8"
            style={{
              width: "1232px",
              height: "280px",
              border: "2px solid yellow",
            }}
          >
            <div className="flex items-center cursor-pointer relative ">
              <div className="flex gap-1 ">
                {/* functionality for clicking the button */}
                <div
                  className={`flex gap-1 pb-2 cursor-pointer ${
                    activeTab === "flights"
                      ? " border-b-4 border-green-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("flights")}
                >
                  <MdOutlineFlight className="rotate-90 w-4 h-6" />
                  Flights
                </div>
              </div>
              <div className="mx-4 w-px bg-gray-300 h-8"></div>

              <div className="flex justify-center gap-1 cursor-pointer">
                {/* functionality for clicking the button */}
                <div
                  className={`flex gap-1 pb-2 cursor-pointer ${
                    activeTab === "stays"
                      ? " border-b-4 border-green-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("stays")}
                >
                  <IoIosBed className="w-4 h-6" />
                  Stays
                </div>
              </div>
            </div>

            {/* end  to upper */}

            {/* booking div  section */}
            <div>
              <div className="flex border border-gray-300 rounded-lg divide-x divide-gray-300 mt-4 ">
                {/* From - To */}
                <div className="flex-1 p-4 relative">
                  <div className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500">
                    From - To
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Lahore - Karachi
                  </div>
                </div>
                {/* Trip */}
                <div className="flex-1 p-4 relative">
                  <div className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500">
                    Trip
                  </div>
                  <div className="text-lg font-medium mt-2">Return</div>
                </div>
                {/* Depart - Return */}
                <div className="flex-1 p-4 relative">
                  <div className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500">
                    Depart - Return
                  </div>
                  <div className="text-lg font-medium mt-2">
                    07 Nov 22 - 13 Nov 22
                  </div>
                </div>
                {/* Passenger - Class */}
                <div className="flex-1 p-4 relative">
                  <div className="absolute -top-3 left-4 bg-white px-1 text-sm text-gray-500">
                    Passenger - Class
                  </div>
                  <div className="text-lg font-medium mt-2">
                    1 Passenger, Economy
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
