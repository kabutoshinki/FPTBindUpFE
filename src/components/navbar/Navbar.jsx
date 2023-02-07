import React from "react";
import { Link } from "react-router-dom";
import { navLink } from "./navbarLink.js";
export const Navbar = () => {
  console.log(navLink);
  return (
    <div className="bg-white fixed left-0 right-0 z-10 pb-4 px-4 pt-4 border-b-2 border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"} className="mr-3">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </Link>
          <div className="relative w-full">
            <input
              className="text-f13 pl-10 xl:w-80 rounded  focus:bg-transparent border border-gray-300 focus:border-grey-500 outline-none placeholder-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Discover your next favorite thing ..."
              type={"text"}
            />
            <div className="absolute inset-15">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="styles_searchIcon__1g65n"
              >
                <path
                  d="M9.383 10.347a5.796 5.796 0 11.965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 100-8.863 4.432 4.432 0 000 8.863z"
                  fill="#BBB"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <nav className="flex items-center md:mr-auto py-1 pl-4 text-base">
            {navLink.map((item) => (
              <Link to={item.href} className="mr-5 text-base text-gray-600 hover:text-gray-700">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <button className="text-f11 font-bold inline-flex items-center bg-white border border-gray-300 mr-2 uppercase py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <span className="f13">Sign in</span>
          </button>
          <button className="primary text-f11 font-bold uppercase inline-flex text-white items-center bg-orange border-0 py-2 px-3 focus:outline-none hover:opacity-70 rounded text-base mt-4 md:mt-0">
            <span className="f13">Sign up</span>
          </button>
        </div>
      </div>
    </div>
  );
};
