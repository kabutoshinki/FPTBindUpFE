import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLink } from "./navbarLink.js";
import Modal from "../popup/Modal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import UserNavbar from "./UserNavbar.jsx";

export const Navbar = () => {
  const [authenticate, setAuthenticate] = useState(false || window.localStorage.getItem("authenticate") === "true");
  const [openModal, setOpenModal] = useState(false);
  const [user, loading] = useAuthState(auth);

  return (
    <div className="bg-white fixed left-0 right-0 z-10 p-[10px] h-[60pt]">
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
            {navLink.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className="mr-[40px] text-lg font-medium text-gray-400 hover:text-[#1939FF]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        {user ? (
          <UserNavbar user={user} />
        ) : (
          <div>
            <button
              onClick={() => setOpenModal(true)}
              className="inline-flex font-medium items-center mr-[20px] py-2 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0"
            >
              <span className="f11">Sign in</span>
            </button>
            <button
              className="inline-flex font-medium text-white items-center bg-[#1984ff] hover:bg-[#1168da] border-0 py-2 px-3 rounded text-base md:mt-0"
              onClick={() => setOpenModal(true)}
            >
              <span className="">Sign up</span>
              <svg
                className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};
