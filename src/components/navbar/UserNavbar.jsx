import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import PostModal from "../popup/PostModal";
import * as authService from "../../services/authenService";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import logo from "../../assets/logo.png";

const UserNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const signOut = () => {
    console.log("logout success");
    auth.signOut();
    authService.logout();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="flex items-center justify-end relative">
      <Link to={"/project/new"}>
        <button
          className="cursor-pointer mr-5 text-lg font-medium text-[#00B1FF] hover:text-[#1939FF]"
          // onClick={() => setOpenModal(true)}
        >
          Submit
        </button>
      </Link>

      <div className="cursor-pointer flex items-center mr-5">
        <IoNotificationsOutline size={"1.5rem"} className="mr-1 text-gray-600" />
        <span className="text-xl text-gray-600">0</span>
      </div>
      <div className="">
        <img
          id="avatarButton"
          className="w-10 h-fit rounded-full cursor-pointer"
          src={user?.avatar || logo}
          alt="Avatar User"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div
            id="userDropdown"
            className={`z-10 absolute bg-slate-50 divide-y divide-gray-100 rounded-lg shadow w-[220px] top-[100%] right-0 ${
              isOpen ? "transition ease-out duration-100" : "hidden"
            }`}
            style={{ transform: "translateX(40%)" }}
          >
            <div className="px-4 py-3 text-sm text-gray-900">
              <div>{user?.name}</div>
              <div className="font-medium truncate">{user?.email}</div>
            </div>
            <ul className="py-2 text-md text-gray-700" aria-labelledby="avatarButton">
              <li>
                <Link to={"/profile"} className="text-center block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
              </li>
              <li>
                <Link to={"/user_dashboard"} className="text-center block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </Link>
              </li>
            </ul>
            <div className="py-1 w-full">
              <button onClick={signOut} className="w-full block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
      <PostModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default UserNavbar;
