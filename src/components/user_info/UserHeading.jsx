import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import * as projectService from "../../services/projectService";
import * as userService from "../../services/userService";
import img_default from "../../assets/images/no_img.png";
import logo from "../../assets/logo.png";
const UserHeading = () => {
  const [user] = useAuthState(auth);
  const [openTab, setOpenTab] = useState(1);
  const [projects, setProjects] = useState([]);
  const [userData, setUserData] = useState();
  const ListUserProjects = async () => {
    const userId = localStorage.getItem("user").replace(/"/g, "");
    const { data } = await projectService.getProjectsUser(userId);
    setProjects(data?.data?.projects);
  };

  const UserProfile = async () => {
    const userId = localStorage.getItem("user").replace(/"/g, "");
    const { data } = await userService.findUserById(userId);
    console.log("data");
    console.log(data);
    setUserData(data?.data);
  };

  useEffect(() => {
    ListUserProjects();
    UserProfile();
  }, []);
  // if (user) console.log("User:", user);
  if (projects) console.log("Projects:", projects);
  return (
    <div className="w-[40%] mx-auto">
      <div className="my-10" id="userInfo">
        <div className="flex my-10 items-center justify-between">
          <div className="flex items-center">
            <img alt="avatar" className="rounded w-[70px] mr-[20px] w-24 h-24" src={userData?.avatar || logo} />
            <h1 className="font-semibold text-[1.5rem]">{userData?.name}</h1>
            {/* <div className="font-normal text-gray-600 mb-3 text-xl">Developer</div> */}
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
        <div className="flex flex-col mt-4 w-full mx-auto">
          <div className="flex items-center space-x-[50px] text-lg font-[500]">
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
              <span>Projects</span>
            </div>
            <div
              onClick={() => setOpenTab(3)}
              className={` ${
                openTab === 3 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block mt-3`}
            >
              <span>Upvotes</span>
            </div>
          </div>
          <div className="py-[20px] mt-4 w-full ">
            <div className={"text-slate-500 " + (openTab === 1 ? "block" : "hidden")}>
              <Link to="/mydetail" className="text-blue-500 hover:underline">
                Add a bio
              </Link>{" "}
              to help people get a better idea of you, your skills, history, and talents.
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              {!projects && <div className="text-slate-400 ">You haven't create any projects yet.</div>}
              <div className="flex bg-white overflow-hidden sm:flex items-center mb-6">
                <div className="flex w-full">
                  <ul className="w-full">
                    {projects?.map((item, index) => (
                      <li key={index}>
                        <Link to={`/project/${item.id}`}>
                          <div className="flex items-center py-[25px] mb-[20px] relative hover:bg-gradient-to-bl hover:from-blue-50 hover:via-white hover:to-white">
                            <div>
                              <img className="w-14 h-14" src={item.logo || img_default} alt="product hunt" />
                            </div>
                            <div className="ml-[30px]">
                              <h3 className="text-base font-bold text-slate-700">{item.name}</h3>
                              <p className="text-[0.9rem] font-normal text-slate-500">{item.summary}</p>
                            </div>
                            <button className="absolute bg-white w-[70px] my-auto right-[35px] border border-slate-200 group hover:border-blue-600 rounded">
                              <div className="flex-col align-center items-center px-[10px] py-2 inset-y-3 text-slate-500 group-hover:text-blue-600">
                                <svg
                                  className="w-[12px] h-[12px] m-auto"
                                  viewBox="0 0 26 22"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span className="text-[0.8rem] font-semibold mt-1 block text-center">
                                  {item.voteQuantity}
                                </span>
                              </div>
                            </button>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={"text-slate-500 " + (openTab === 3 ? "block" : "hidden")}>
              You have supported these projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeading;
