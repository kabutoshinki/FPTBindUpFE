import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
const UserNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between relative">
      <div className="mr-2 text-orange-500 text-2xl">Submit</div>
      <div className="flex items-center mr-5">
        <IoNotificationsOutline size={"2rem"} className="mr-3 text-gray-600" />
        <div className="text-xl text-gray-600">0</div>
      </div>
      <div>
        <img
          id="avatarButton"
          type="button"
          className="w-10 h-10 rounded-full cursor-pointer"
          src={user?.photoURL}
          alt="User dropdown"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div
            id="userDropdown"
            className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-70 top:100% left-0 dark:bg-gray-700 dark:divide-gray-600 ${
              isOpen ? "transition ease-out duration-100" : "hidden"
            }`}
            style={{ transform: "translateX(40%)" }}
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user?.displayName}</div>
              <div className="font-medium truncate">{user?.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <Link
                  to={"#"}
                  className="text-center block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </Link>
              </li>
            </ul>
            <div className="py-1 w-full">
              <button
                onClick={() => auth.signOut()}
                className="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
