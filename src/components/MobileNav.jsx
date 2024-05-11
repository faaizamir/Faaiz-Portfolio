import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative">
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>
      <div className="bg-[#212425] py-4 flex flex-col">
        <div className="relative px-4  flex justify-end">
          <button
            className="text-pink-500 z-50 w-8 h-8 relative focus:outline-none bg-[#212425]"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out mb-2 ${
                  open ? "rotate-45 mb-0" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out my-1 ${
                  open ? "opacity-0 my-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out mt-2 ${
                  open ? "-rotate-45 mt-0" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
        {open && (
          <ul className="absolute top-10 right-0 z-40 bg-[#212425] shadow-lg py-2 rounded-md w-full">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r w-full py-3 cursor-pointer font-poppins bg-[#FA5252] font-medium  text-xtiny text-white px-4 flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] gap-4 "
                  : "px-3  gap-4 w-full  cursor-pointer font-poppins bg-[#F3F6F6] font-medium text-xtiny text-gray-lite dark:text-[#A6A6A6]  flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-1"
              }
              to="/"
            >
              <span className="text-xl mb-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                </svg>
              </span>
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r w-full py-3 cursor-pointer font-poppins bg-[#FA5252] font-medium  text-xtiny text-white px-4 flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] gap-4 "
                  : " px-3 gap-4 w-full  cursor-pointer font-poppins bg-[#F3F6F6] font-medium text-xtiny text-gray-lite dark:text-[#A6A6A6]  flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-1"
              }
              to="/resume"
            >
              <span className="text-xl mb-1">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Resume
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r w-full py-3 cursor-pointer font-poppins bg-[#FA5252] font-medium  text-xtiny text-white px-4 flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] gap-4 "
                  : "px-3  gap-4 w-full  cursor-pointer font-poppins bg-[#F3F6F6] font-medium text-xtiny text-gray-lite dark:text-[#A6A6A6]  flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-1"
              }
              to="/portfolio"
            >
              <span className="text-xl mb-1">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </span>
              Works
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r w-full py-3 cursor-pointer font-poppins bg-[#FA5252] font-medium  text-xtiny text-white px-4 flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] gap-4 "
                  : "px-3 gap-4 w-full  cursor-pointer font-poppins bg-[#F3F6F6] font-medium text-xtiny text-gray-lite dark:text-[#A6A6A6]  flex  items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-1"
              }
              to="/contact"
            >
              <span className="text-xl mb-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path>
                  </g>
                </svg>
              </span>
              Contact
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
