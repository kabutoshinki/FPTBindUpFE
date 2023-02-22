import React, { useState } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import ProjectAboutSection from "./ProjectAboutSection"
import ProjectReview from "./ProjectReviewSection"
import { asidebarData } from "../../components/asidebar/asidebarData";

export const ProjectInfo = ({ rating }) => {

  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="left-0 right-0 z-10 p-[20px] w-[67%] mx-auto">
      <div className="mx-auto flex flex-col justify-between items-start pt-[40px] ">
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <Link to={"/"} className="mr-5 rounded ">
              <img className="object-cover rounded-lg h-16 w-16" src="/project-logo.png" alt="BindUP logo" />
            </Link>
            <div>
              <div className="flex items-center">
                <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[6px]">WebWave</h3>
                {/* <span class="bg-blue-50 text-blue-800 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-blue-400">Upcoming</span> */}
                <span className="bg-emerald-50 text-emerald-800 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-emerald-400">Launching</span>
              </div>
              <p className="text-slate-500">The true drag and drop website builder</p>
            </div>
          </div>
          <div className="flex items-center">
            <button type="button" className="flex text-slate-400 border border-slate-400 hover:text-rose-500 hover:border-rose-500 font-medium rounded text-md px-5 py-2.5 mr-2">
              <svg fill="currentColor" className="w-7 h-7 mr-[10px]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M8 20.695l7.997-11.39L24 20.695z" /></svg>
              <p>Upvote <span> (568)</span> </p>
            </button>
            <button type="button" className="flex text-slate-400 border border-slate-400 hover:text-rose-500 hover:border-rose-500 font-medium rounded text-md px-5 py-2.5 mr-2">
              <svg fill="currentColor" className="w-7 h-7 mr-[10px]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z" /></svg>
              <p>Love</p>
            </button>
          </div>
        </div>
        {/* <div className="">
          <p className="">Ditch the grids, create websites like you design graphics</p>
        </div> */}
        <div className="my-[30px] flex justify-between items-center text-slate-500 font-[400]">
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
        </div>
        <div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2">Follow</button>
          <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">Visit website</button>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Share</button>
        </div>
        <div className="mt-[20pt] flex space-x-[50px] text-lg font-[500] w-full">
          <div
            onClick={() => setOpenTab(1)}
            className={` ${openTab === 1 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"} cursor-pointer inline-block `}
          >
            <span className="">About</span>
          </div>
          <div
            onClick={() => setOpenTab(2)}
            className={` ${openTab === 2 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"} cursor-pointer inline-block `}
          >
            <span>Reviews</span>
          </div>
          <div
            onClick={() => setOpenTab(3)}
            className={` ${openTab === 3 ? "text-blue-600 border-b-2 border-blue-400" : "text-gray-400"} cursor-pointer inline-block `}
          >
            <span>Jobs</span>
          </div>
        </div>
        <div className="my-[30px] w-full flex">
          <div className="py-[20px] mt-4 w-[75%] mr-[20px]">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <ProjectAboutSection />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <ProjectReview />
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              Tab 3
            </div>
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
    </div >
  );
};

export default ProjectInfo;