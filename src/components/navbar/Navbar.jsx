import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLink } from "./navbarLink.js";
import Modal from "../popup/Modal";

export const Navbar = () => {
  console.log(navLink);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white fixed left-0 right-0 z-10 p-[20px]">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"} className="mr-5">
            <img className="h-fit w-8" src="logo.png" alt="BindUP logo" />
          </Link>
          <div className="relative w-[250px] mr-[40px]">
            <input
              className="text-f13 px-[10px] py-[15px] pr-[35px] w-full rounded border border-gray-200 focus:border-grey-500 outline-none placeholder:text-gray-400 transition-colors duration-200 ease-in-out"
              placeholder="Discover innovative projects ..."
              type={"text"}
            />
            <div className="absolute right-[10px] top-1/2 -translate-y-1/2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="styles_searchIcon__1g65n"
              >
                <path
                  d="M9.383 10.347a5.796 5.796 0 11.965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 100-8.863 4.432 4.432 0 000 8.863z"
                  fill="#e0e5eb"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <nav className="flex items-center md:mr-auto ">
            {
              navLink.map((item) => (
                <Link to={item.href} key={item.href} className="mr-[40px] text-lg font-medium text-gray-400 hover:text-[#1939FF]">
                  {item.name}
                </Link>
              ))
            }
          </nav>
        </div>
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center mr-[20px] py-2 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0"
          >
            <span className="f11">Sign in</span>
          </button>
          <button className="inline-flex text-white items-center bg-[#1984ff] hover:bg-[#1168da] border-0 py-2 px-3 rounded text-base md:mt-0">
            <span className="">Sign up</span>
          </button>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};
