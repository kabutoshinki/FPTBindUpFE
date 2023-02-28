import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";

const UserNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(user?.photoURL);
  return (
    <div className="flex items-center justify-end relative">
      <div className="cursor-pointer mr-5 text-lg font-medium text-[#00B1FF] hover:text-[#1939FF]">Submit</div>
      <div className="cursor-pointer flex items-center mr-5">
        <IoNotificationsOutline size={"1.5rem"} className="mr-1 text-gray-600" />
        <span className="text-xl text-gray-600">0</span>
      </div>
      <div className="">
        <img
          id="avatarButton"
          className="w-10 h-fit rounded-full cursor-pointer"
          src={user?.photoURL}
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
              <div>{user?.displayName}</div>
              <div className="font-medium truncate">{user?.email}</div>
            </div>
            <ul className="py-2 text-md text-gray-700" aria-labelledby="avatarButton">
              <li>
                <Link to={"/profile"} className="text-center block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
              </li>
            </ul>
            <div className="py-1 w-full">
              <button
                onClick={() => auth.signOut()}
                className="w-full block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNavbar;
