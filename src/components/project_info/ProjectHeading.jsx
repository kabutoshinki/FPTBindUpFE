import React, { useState } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },

];

export const ProjectHeading = ({ rating }) => {

  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="left-0 right-0 z-10 p-[20px]">
      <div className="w-[85%] mx-auto flex flex-col justify-between items-start pt-[40px]">
        <div className="flex items-center">
          <Link to={"/"} className="mr-5 rounded ">
            <img className="object-cover rounded-lg h-16 w-16" src="/project-logo.png" alt="BindUP logo" />
          </Link>
          <div>
            <div className="flex items-center">
              <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[6px]">WebWave</h3>
              {/* <span class="bg-blue-50 text-blue-800 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-blue-400">Upcoming</span> */}
              <span class="bg-emerald-50 text-emerald-800 text-[15px] font-medium mr-2 px-2.5 py-0.5 rounded border border-emerald-400">Launching</span>
            </div>
            <p className="text-slate-500">The true drag and drop website builder</p>
          </div>
        </div>
        {/* <div className="">
          <p className="">Ditch the grids, create websites like you design graphics</p>
        </div> */}
        <div className="my-[30px] flex justify-between items-center text-slate-500 font-[400]">
          <div className="flex items-center">
            <Rating className="read-only" value={rating} readOnly />
            <span className="ml-[5px] inline-flex text-lg font-[500]">67 </span>  reviews
          </div>
          <div>
            <span className="ml-[15px] inline-flex text-lg font-[500]">1600 </span> votes
          </div>
          <div>
            <span className="ml-[15px] inline-flex text-lg font-[500]">3450 </span> followers
          </div>
        </div>
        <div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2">Follow</button>
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Visit website</button>
          <button type="button" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Share</button>
        </div>
        <div className="my-[30px] ">
          <div className="flex space-x-[50px] text-lg font-[500] w-full">
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
          <div className="py-[20px] mt-4 w-[70%] ">
            <div className={openTab === 1 ? "block" : "hidden"}>
              <ImageGallery items={images} />

              WebWave is the only freehand, true drag and drop website builder. You have freedom to position elements anywhere on the canvas and work with layers. Like in Figma.
              <div className="mt-[20px] grid gap-4 grid-cols-4 grid-rows-8">
                <p className="col-span-1 font-medium">Website</p>
                <p className="col-span-3">webwave.me</p>

                <p className="col-span-1 font-medium">Makers</p>
                <p className="col-span-3">Ewelina Wróbel, Monika Buchelt, Maciej Czajkowski, Janusz Mirowski</p>

                <p className="col-span-1 font-medium">Pricing</p>
                <p className="col-span-3">This product requires payment but also offers a free trial or version</p>

                <p className="col-span-1 font-medium">Platforms</p>
                <p className="col-span-3">Web</p>

              </div>

            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              Tab 2
            </div>
            <div className={openTab === 3 ? "block" : "hidden"}>
              Tab 3
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProjectHeading;