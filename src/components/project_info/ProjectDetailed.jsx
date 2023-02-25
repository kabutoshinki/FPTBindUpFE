import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectAboutSection from "./ProjectAboutSection";
import ProjectReview from "./ProjectReviewSection";
import { asidebarData } from "../../components/asidebar/asidebarData";
import useFetch from "../../hooks/useFetch";

export const ProjectDetailed = ({ rating, id }) => {
  const [openTab, setOpenTab] = useState(1);
  const { data } = useFetch(`http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/project/${id}`);
  console.log(data.data?.id);
  
  return (
    <div className="left-0 right-0 z-10 p-[20px] w-[67%] mx-auto">
      <div className="mx-auto flex flex-col justify-between items-start pt-[40px] ">
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <Link to={"/"} className="mr-5 rounded ">
              <img className="object-cover rounded-lg h-16 w-16" src={data.data?.logo} alt="BindUP logo" />
            </Link>
            <div>
              <div className="flex items-center">
                <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[6px]">{data.data?.name}</h3>
                {/* <span class="bg-blue-50 text-blue-800 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-blue-400">Upcoming</span> */}
                {data.data?.milestone === 0 &&
                  <span className="bg-orange-50 text-orange-500 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-orange-400">
                    Idea
                  </span>
                }
                {data.data?.milestone === 1 &&
                  <span className="bg-emerald-50 text-emerald-800 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-emerald-400">
                    Upcoming
                  </span>
                }
                {data.data?.milestone === 2 &&
                  <span className="bg-emerald-50 text-emerald-800 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-emerald-400">
                    Launching
                  </span>
                }
              </div>
              <p className="text-slate-500">{data.data?.summary}</p>
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
                Upvote <span> ({data.data?.voteQuantity})</span>{" "}
              </p>
            </button>
            <Link to={data.data?.source} target="_blank">
              <button
                type="button"
                className="flex text-slate-400 border border-slate-400 hover:text-rose-500 hover:border-rose-500 font-medium rounded text-md px-5 py-2.5 mr-2">
                <svg className="w-7 h-7 mr-[10px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.488 6.51196L5.98804 18.012" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.988 15.0121L17.988 6.35514C17.988 6.15239 17.8236 5.98804 17.6209 5.98804L8.98804 5.98804" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Visit website</p>
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="">
          <p className="">Ditch the grids, create websites like you design graphics</p>
        </div> */}

        {/* Statistics */}
        {/* <div className="my-[30px] flex justify-between items-center text-slate-500 font-[400]">
          <div className="flex items-center">
            <Rating className="read-only" value={rating} readOnly />
            <span className="ml-[5px] inline-flex text-lg font-[500]"> 67 </span> reviews
          </div>
          <div>
            <span className="ml-[15px] inline-flex text-lg font-[500]">1600 </span> votes
          </div>
          <div>
            <span className="ml-[15px] inline-flex text-lg font-[500]">3450 </span> followers
          </div>
        </div> */}

        {/* <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Follow
          </button>
          <Link
            to={data.data?.source}
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
          >
            Visit website
          </Link>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Share
          </button>
        </div> */}

        <div className="mt-[30pt] flex space-x-[50px] text-lg font-[500] w-full">
          <div
            onClick={() => setOpenTab(1)}
            className={` ${openTab === 1 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block `}
          >
            <span className="">About</span>
          </div>
          <div
            onClick={() => setOpenTab(2)}
            className={` ${openTab === 2 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block `}
          >
            <span>Reviews</span>
          </div>
          <div
            onClick={() => setOpenTab(3)}
            className={` ${openTab === 3 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"} cursor-pointer inline-block `}
          >
            <span>Jobs</span>
          </div>
          <div
            onClick={() => setOpenTab(4)}
            className={` ${openTab === 4 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block `}
          >
            <span>Members</span>
          </div>
          <div
            onClick={() => setOpenTab(5)}
            className={` ${openTab === 5 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block `}
          >
            <span>Mentor</span>
          </div>
          <div
            onClick={() => setOpenTab(6)}
            className={` ${openTab === 6 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"
              } cursor-pointer inline-block `}
          >
            <span>Change logs</span>
          </div>
        </div>
        <div className="my-[30px] w-full flex">
          <div className="py-[20px] mt-4 w-[75%] mr-[20px]">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <ProjectAboutSection data={data} />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <ProjectReview />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>Tab 3</div>
          </div>
          <div className="py-[20px] mt-4 float-right">
            <div className="mt-3 text-base font-bold mb-3 text-gray-900">
              Upcomming Products
              <span className="text-f13 ml-2 text-gray-500 font-normal">Powered by Ship</span>
            </div>
            <div className="bg-white rounded shadow ">
              {asidebarData.map((item, index) => (
                <div
                  className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center"
                  key={index}
                >
                  <div>
                    <span className="text-f13 font-bold text-gray-900 mb-2 block">{item.title}</span>
                    <div className="text-f13 text-gray-500">{item.description}</div>
                    <div className="flex text-f11 font-medium mt-3">
                      <img className="mr-1" src={item.icon} alt="plus" />
                      FOLLOW ({item.follow})
                    </div>
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