import React from "react";
import useFetch from "../../hooks/useFetch";
import img_default from "../../assets/images/no_img.png";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import * as projectService from "../../services/projectService";
import { jobData } from "./jobData";

const JobList = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const [numOfPages, setNumOfPages] = useState(0);
  const { data, loading } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/project/?pageNo=${currentPage}&pageSize=5&sortBy=voteQuantity`
  );

  useEffect(() => {
    setProjects(data);
  }, [data]);

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="mx-auto">
      <div className="mt-[60px] mb-[25px]">
        <div className="flex justify-between items-center">
          <h3 className="text-slate-800 text-3xl font-bold mb-[15px]">🔭 Your favorite jobs may be here!</h3>
          <button
            type="button"
            className="px-[20px] py-[8px] flex items-center justify-center text-white bg-[#00B1FF] hover:bg-[#00aaf3] font-medium rounded text-md "
          >
            <svg className="w-7 h-7 mr-[10px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 7V18C21 19.6569 19.6569 21 18 21H7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10V7M10 10V13M10 10H13M10 10H7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Post a job</p>
          </button>
        </div>
        <p className="text-slate-500">Go look for a position that suits you.</p>
      </div>
      <div className="flex items-center justify-between mb-[10px]">
        <div className="relative w-[250px] mr-[40px]">
          <input
            className="text-f13 px-[10px] py-[10px] pr-[35px] w-full rounded border border-slate-200 focus:border-grey-500 outline-none placeholder:text-slate-400 transition-colors duration-200 ease-in-out"
            placeholder="Search by title ..."
            type={"text"}
          />
          <div className="absolute right-[10px] top-1/2 -translate-y-1/2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="styles_searchIcon__1g65n"
            >
              <path
                d="M9.383 10.347a5.796 5.796 0 11.965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 100-8.863 4.432 4.432 0 000 8.863z"
                fill="#e0e5eb"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <ReactPaginate
          className=""
          previousLabel={"<"}
          breakLabel={"..."}
          nextLabel={">"}
          pageCount={projects?.data?.numOfPages}
          onPageChange={handlePageClick}
          containerClassName={"inline-flex -space-x-px mb-4"}
          pageLinkClassName={"px-3 py-2  text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}
          previousLinkClassName={
            "px-3 py-2 ml-0 tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          }
          nextLinkClassName={"px-3 py-2  text-gray-500 bg-white rounded-r-lg hover:bg-gray-100 hover:text-gray-700"}
          breakLinkClassName={"px-3 py-2 text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}
          activeLinkClassName={"px-3 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"}
        />
      </div>
      {loading ? (
        // <Loading className="mx-auto" />
        <LinearProgress />
      ) : (
        <div className="flex bg-white overflow-hidden sm:flex items-center mb-6">
          <div className="flex w-full">
            <ul className="w-full">
              {jobData.map((item, index) => (
                <li key={index}>
                  <Link to={`/job/1`}>
                    <div className="flex justify-between items-center h-[110px] border-[1px] border-slate-200 rounded px-[20px] py-[15px] mb-[20px] relative hover:bg-gradient-to-bl hover:from-[#e6f7ff] hover:via-white hover:to-white">
                      <div className="flex items-center h-full">
                        <img
                          className="w-14 h-14 my-auto"
                          src={item.projectLogo}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/no_img.png";
                          }}
                          alt={item.project + " logo"}
                        />
                        <div className="ml-[30px] h-full flex flex-col justify-between">
                          {/* vote quantity of project is placed in the bracket */}
                          <p className="text-[0.9rem] font-[500] text-slate-500">{item.project}</p>
                          <h3 className="text-[1.3rem] font-bold text-slate-700">{item.title}</h3>
                          <div className="flex items-center space-x-[20px]">
                            <p className="text-[0.8rem] font-[500] text-slate-400 flex items-center">
                              <svg
                                className="w-4 h-4 mr-[5px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 8V12L15 15"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                />
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                              </svg>
                              {item.dueDate}
                            </p>
                            <p className="text-[0.8rem] font-[500] text-slate-400 flex items-center">
                              <svg
                                className="w-4 h-4 mr-[5px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 11H6.2C5.07989 11 4.51984 11 4.09202 11.218C3.71569 11.4097 3.40973 11.7157 3.21799 12.092C3 12.5198 3 13.0799 3 14.2V21M21 21V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H14.2C13.0799 3 12.5198 3 12.092 3.21799C11.7157 3.40973 11.4097 3.71569 11.218 4.09202C11 4.51984 11 5.0799 11 6.2V21M22 21H2M14.5 7H17.5M14.5 11H17.5M14.5 15H17.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {item.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-0 m-0 h-full flex flex-col items-end justify-between">
                        <div className="mb-[20px]">
                          <span class="bg-indigo-50 text-indigo-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">
                            #engineer
                          </span>
                          <span class="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-0.5 rounded ">
                            #data
                          </span>
                        </div>
                        <button className=" bg-white w-[70px] border border-slate-200 group hover:border-blue-600 rounded">
                          <div className="px-[10px] py-[10px] text-slate-500 group-hover:text-blue-600">
                            <span className="text-[0.8rem] font-semibold block text-center">Apply</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
