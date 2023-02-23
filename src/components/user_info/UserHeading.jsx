import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
const UserHeading = () => {
  const [user] = useAuthState(auth);
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="container mx-auto px-2">
      <div className="sm:space-x-4 sm:px-4 my-10 justify-center items-center" id="userInfo">
        <div className="flex flex-col lg:flex-row sm:space-x-4 sm:px-4 my-10 justify-center items-center">
          <div>
            <img alt="avatar" className="rounded-full w-32 sm:w-40" src={user?.photoURL} />
          </div>
          <div>
            <h1 className="font-semibold text-2xl sm:text-3xl">{user?.displayName}</h1>
            <div className="font-normal text-gray-600 mb-3 text-xl">Developer</div>
            <div className="flex">
              <div className="text-gray-600 text-sm sm:text-base mr-4 font-sans">#5008566</div>
              <div className="text-gray-600 text-sm sm:text-base mr-4 font-sans">0 followers</div>
              <div className="text-gray-600 text-sm sm:text-base mr-4 font-sans">0 following</div>
            </div>
            <Link to={"#"} className="text-gray-600 text-sm sm:text-base mr-4 font-sans">
              4 day streak
            </Link>
          </div>
          <div className="flex justify-center my-6">
            <Link
              to="/mydetail"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow 
          mx-2 sm:mx-3"
            >
              Edit my profile
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around mt-4 w-[70%]">
          <div className="flex space-x-4 text-lg font-[500] w-[70%]">
            <div
              onClick={() => setOpenTab(1)}
              className={` ${
                openTab === 1 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block mt-3`}
            >
              <span className="">About</span>
            </div>
            <div
              onClick={() => setOpenTab(2)}
              className={` ${
                openTab === 2 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block mt-3`}
            >
              <span>Activity</span>
            </div>
            <div
              onClick={() => setOpenTab(3)}
              className={` ${
                openTab === 3 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block mt-3`}
            >
              <span>Upvote</span>
            </div>
            <div
              onClick={() => setOpenTab(4)}
              className={` ${
                openTab === 4 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block mt-3`}
            >
              <span>0 Collections</span>
            </div>
            <div
              onClick={() => setOpenTab(5)}
              className={` ${
                openTab === 5 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block mt-3`}
            >
              <span>Stacks</span>
            </div>
          </div>
          <div className="py-[20px] mt-4 w-[70%] ">
            <div className={openTab === 1 ? "block" : "hidden"}>In progress</div>
            <div className={openTab === 2 ? "block" : "hidden"}>Tab 2</div>
            <div className={openTab === 3 ? "block" : "hidden"}>Tab 3</div>
            <div className={openTab === 4 ? "block" : "hidden"}>Tab 4</div>
            <div className={openTab === 5 ? "block" : "hidden"}>Tab 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeading;
