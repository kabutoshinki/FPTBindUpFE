import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const JobDescription = ({ rating, id, openTabId }) => {
  const [openTab, setOpenTab] = useState(openTabId);

  return (
    <div className="left-0 right-0 z-10 p-[20px] w-[67%] mx-auto">
      <div className="mx-auto flex flex-col justify-between items-start pt-[40px] ">
        <div className="mb-[20px]">
          <Breadcrumbs aria-label="breadcrumb" >
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
        </div>
        <div className="w-full flex">
          {/* Left */}
          <div className="py-[20px] w-[75%] mr-[20px]">
            <div className="flex items-center">
              <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[6px]">job title</h3>
            </div>
            <div>
              Job description here
            </div>
          </div>

          {/* Right */}
          <div className="py-[20px] mt-4 float-right">
            <div className="w-[250px] h-[300px] p-[20px] shadow border border-slate-300 rounded-md flex flex-col justify-center items-center">
              <div className="w-full flex flex-col items-center border-b border-b-slate-300 pb-[20px] mb-[20px]">
                <img className="object-cover rounded-full h-16 w-16 mb-[10px]" src="/no_img.png" onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no_img.png";
                }} alt="BindUP logo" />
                <h3 className="font-[500] text-slate-600 text-lg">BindUP Inc.</h3>
              </div>
              <div className="">
                <div className="flex items-center space-x-[20px] mb-[20px]">
                  <p className="text-[0.8rem] font-[500] text-slate-400 flex items-center">
                    <svg className="w-4 h-4 mr-[5px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    20/03/2023
                  </p>
                  <p className="text-[0.8rem] font-[500] text-slate-400 flex items-center">
                    <svg className="w-4 h-4 mr-[5px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 11H6.2C5.07989 11 4.51984 11 4.09202 11.218C3.71569 11.4097 3.40973 11.7157 3.21799 12.092C3 12.5198 3 13.0799 3 14.2V21M21 21V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H14.2C13.0799 3 12.5198 3 12.092 3.21799C11.7157 3.40973 11.4097 3.71569 11.218 4.09202C11 4.51984 11 5.0799 11 6.2V21M22 21H2M14.5 7H17.5M14.5 11H17.5M14.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Thu Duc City
                  </p>
                </div>
                <button type="button" class="w-full flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-[500] rounded text-[1rem] px-5 py-2.5 mr-2 mb-2">
                  Send
                  <svg className="w-5 h-5 ml-[5px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 14L13 21L20 4L3 11L6.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" class="w-full flex items-center justify-center text-blue-600 border border-blue-700 hover:border-blue-800 font-[500] rounded text-[1rem] px-5 py-2.5 mr-2 mb-2">
                  Visit project
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
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
