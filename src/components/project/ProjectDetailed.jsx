import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectAboutSection from "./ProjectAboutSection";
import ProjectReview from "./ProjectReviewSection";
import { asidebarData } from "../asidebar/asidebarData";
import useFetch from "../../hooks/useFetch";
import * as projectService from "../../services/projectService";
import { useEffect } from "react";
import ProjectChangelogDetail from "./ProjectChangelogDetail";
import ProjectMemberDetail from "./ProjectMemberDetail";
import ProjectJob from "./ProjectJob";

export const ProjectDetailed = ({ id, openTabId }) => {
  const [openTab, setOpenTab] = useState(openTabId || 1);
  const [project, setProject] = useState([]);
  const { data } = useFetch(`http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/projects/${id}`);
  // console.log(data);

  document.documentElement.scrollTop = 0;
  useEffect(() => {
    setProject(data);
    console.log("Project: ", data);
  }, [data]);
  // console.log("project"); console.log(project);

  return (
    <div className="left-0 right-0 z-10 p-[20px] w-[67%] mx-auto">
      <div className="mx-auto flex flex-col justify-between items-start pt-[40px] ">
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <img
              className="object-cover rounded-lg h-16 w-16 mr-[20px]"
              src={project?.data?.logo || "/no_img.png"}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/no_img.png";
              }}
              alt="BindUP logo"
            />
            <div>
              <div className="flex items-center">
                <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[6px]">{project?.data?.name}</h3>
                {project?.data?.milestone === 0 && (
                  <span className="bg-orange-50 text-orange-500 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-orange-400">
                    Idea
                  </span>
                )}
                {project?.data?.milestone === 1 && (
                  <span className="bg-emerald-50 text-blue-700 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-blue-400">
                    Upcoming
                  </span>
                )}
                {project?.data?.milestone === 2 && (
                  <span className="bg-emerald-50 text-emerald-700 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-emerald-400">
                    Launching
                  </span>
                )}
              </div>
              <p className="text-slate-500">{project?.data?.summary}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="flex text-white bg-gradient-to-tr from-rose-400 to-rose-600 hover:text-rose-100 font-medium rounded text-md px-5 py-2.5 mr-[5px]"
            >
              <svg
                fill="currentColor"
                className="w-7 h-7 mr-[10px]"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 20.695l7.997-11.39L24 20.695z" />
              </svg>
              <p>
                Upvote <span> ({project?.data?.voteQuantity})</span>{" "}
              </p>
            </button>
            <Link to={project?.data?.source} target="_blank">
              <button
                type="button"
                className="flex text-slate-400 border border-slate-400 hover:text-rose-500 hover:border-rose-500 font-medium rounded text-md px-5 py-2.5 mr-2"
              >
                <svg className="w-7 h-7 mr-[10px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.488 6.51196L5.98804 18.012"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.988 15.0121L17.988 6.35514C17.988 6.15239 17.8236 5.98804 17.6209 5.98804L8.98804 5.98804"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Visit website</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-[30pt] flex space-x-[50px] text-lg font-[500] w-full">
          <div
            onClick={() => setOpenTab(1)}
            className={` ${
              openTab === 1 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
            } cursor-pointer inline-block `}
          >
            <span className="">About</span>
          </div>
          <div
            onClick={() => setOpenTab(2)}
            className={` ${
              openTab === 2 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
            } cursor-pointer inline-block `}
          >
            <span>Jobs</span>
          </div>
          <div
            onClick={() => setOpenTab(3)}
            className={` ${
              openTab === 3 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
            } cursor-pointer inline-block `}
          >
            <span>Members</span>
          </div>
          <div
            onClick={() => setOpenTab(4)}
            className={` ${
              openTab === 4 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
            } cursor-pointer inline-block `}
          >
            <span>Changelog</span>
          </div>
        </div>
        <div className="my-[30px] w-full flex">
          <div className="py-[20px] mt-4 w-[75%] mr-[20px]">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <ProjectAboutSection data={project} />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <ProjectJob project={project} />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              <ProjectMemberDetail project={project} />
            </div>
            <div className={openTab === 4 ? "block" : "hidden"}>
              <ProjectChangelogDetail project={project} />
            </div>
          </div>
          <div className="border-l border-l-slate-200 px-[20px] mt-4 float-right">
            <div className="text-base font-bold mb-3 text-gray-900">Newest projects</div>
            <div className="bg-white rounded shadow ">
              {asidebarData.map((item, index) => (
                <div
                  className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center"
                  key={index}
                >
                  <div>
                    <span className="text-f13 font-bold text-gray-900 mb-2 block">{item.title}</span>
                    <div className="text-f13 text-gray-500">{item.description}</div>
                  </div>
                  <div>
                    <img src={item.img} alt="podcast" />
                  </div>
                </div>
              ))}

              <div className="p-5 flex">
                <button className="w-full font-bold text-f11 items-center bg-white border border-gray-300 uppercase py-2 focus:outline-none hover:bg-gray-200 rounded text-base ">
                  <span className="f12 text-hunt">view all</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailed;
