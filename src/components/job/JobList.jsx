import React from "react";
import useFetch from "../../hooks/useFetch";
import img_default from "../../assets/images/no_img.png";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import * as jobService from "../../services/jobService";
import { jobData } from "./jobData";

const JobList = ({ checkDueDate, sortKey }) => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  // const [numOfPages, setNumOfPages] = useState(0);

  var nameKeyWordApi = "";
  const nameKeyword = () => {
    if (searchTerm !== "") {
      nameKeyWordApi += "&keyword=" + searchTerm;
    }
    return nameKeyWordApi;
  };
  var dueDateParam = "";
  var orderParam = "";
  const sortBy = () => {
    if (checkDueDate?.desc) dueDateParam = "&sortBy=due_date";
    if (checkDueDate?.asc) dueDateParam = "&sortBy=due_date";
    return dueDateParam;
  };

  const order = () => {
    if (checkDueDate?.desc) orderParam = "&ascending=DESC";
    if (checkDueDate?.asc) orderParam = "&ascending=ASC";
    return orderParam;
  };

  const { data, loading } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/jobs?pageNo=${currentPage}&pageSize=5&${sortBy()}${order()}${nameKeyword()}`
  );
  console.log(data);
  useEffect(() => {
    setJobs(data);
    console.log("Jobs: ", data);
  }, [data]);

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mx-auto">
      <div className="mt-[60px] mb-[25px]">
        <div className="flex justify-between items-center">
          <h3 className="text-slate-800 text-3xl font-bold mb-[15px]">🔭 Your favorite jobs may be here!</h3>
        </div>
        <p className="text-slate-500">Go look for a position that suits you.</p>
      </div>
      <div className="flex items-center justify-between mb-[10px]">
        <div className="relative w-[250px] mr-[40px]">
          <input
            className="text-f13 px-[10px] py-[10px] pr-[35px] w-full rounded border border-slate-200 focus:border-grey-500 outline-none placeholder:text-slate-400 transition-colors duration-200 ease-in-out"
            placeholder="Search by title ..."
            type={"text"}
            onChange={handleSearch}
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
          pageCount={jobs?.data?.pageSize}
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
            {jobs?.data?.jobDTOWithProjectList?.length > 0 ? (
              <ul className="w-full">
                {jobs?.data?.jobDTOWithProjectList?.map((item, index) => (
                  <li key={index}>
                    {/* <Link to={jobService.getJobById(item.id)}> */}
                    <Link to={`/job/${item.id}`}>
                      {/* <Link to={"/job/1"}> */}
                      <div className="flex justify-between items-center h-[110px] rounded pr-[20px] py-[15px] mb-[20px] relative hover:bg-gradient-to-bl hover:from-[#e6f7ff] hover:via-white hover:to-white">
                        <div className="flex items-center h-full">
                          <img
                            className="w-14 h-14 my-auto"
                            src={item.projectLogo || img_default}
                            alt={item.project + " logo"}
                          />
                          <div className="ml-[30px] h-full flex flex-col justify-between">
                            {/* vote quantity of project is placed in the bracket */}
                            <p className="text-[0.9rem] font-[500] text-slate-500">{item.projectName}</p>
                            <h3 className="text-[1.3rem] font-bold text-slate-700">{item.name}</h3>
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
                                <p className="mb-[1px]">{item.dueDate}</p>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-0 m-0 h-full flex items-center justify-between">
                          <button className=" bg-white w-[70px] border border-slate-200 group hover:border-blue-600 rounded">
                            <div className="px-[5px] py-[5px] text-slate-500 group-hover:text-blue-600">
                              <span className="text-[0.8rem] font-semibold block text-center">Apply</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mx-auto my-[80px] text-[28px] text-slate-300 font-[500]">No jobs founded!</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
