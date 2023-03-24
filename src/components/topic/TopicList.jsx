import React from "react";
import useFetch from "../../hooks/useFetch";
import img_default from "../../assets/images/no_img.png";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import * as topicService from "../../services/topicService";
import { jobData } from "../job/jobData";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { data, loading } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/topics/?pageNo=${currentPage}&pageSize=5&sortBy=id`
  );

  useEffect(() => {
    setTopics(data);
    console.log("Topics: ", data);
  }, [data]);

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="mx-auto">
      <div className="mt-[60px] mb-[25px]">
        <div className="flex justify-between items-center">
          <h3 className="text-slate-800 text-3xl font-bold mb-[15px]">✌️ Topics of projects!</h3>
        </div>
        <p className="text-slate-500">Find favorite project corresponding to these topics.</p>
      </div>
      <div className="flex items-center justify-between mb-[10px]">
        <div className="relative w-[250px] mr-[40px]">
          <input
            className="text-f13 px-[10px] py-[10px] pr-[35px] w-full rounded border border-slate-200 focus:border-grey-500 outline-none placeholder:text-slate-400 transition-colors duration-200 ease-in-out"
            placeholder="Search topics ..."
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
        {topics?.data?.numOfPages > 1 && (
          <ReactPaginate
            className=""
            previousLabel={"<"}
            breakLabel={"..."}
            nextLabel={">"}
            pageCount={topics?.data?.numOfPages}
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
        )}
      </div>
      {loading ? (
        // <Loading className="mx-auto" />
        <LinearProgress />
      ) : (
        <div className="flex bg-white overflow-hidden sm:flex items-center mb-6">
          <div className="flex w-full">
            <ul className="w-full">
              {topics?.data?.topicDTOList?.map((item, index) => (
                <li key={index}>
                  {/* <Link to={`/topic/${item.id}/projects`}> */}
                  <Link to={`/topic/1/projects`}>
                    <div className="flex justify-between items-center h-[110px] rounded px-[20px] py-[15px] mb-[20px] relative hover:bg-gradient-to-bl hover:from-[#e6f7ff] hover:via-white hover:to-white">
                      <div className="flex items-center h-full">
                        <img className="w-14 h-14 my-auto" src={item.logo || img_default} />
                        <div className="ml-[30px]">
                          <h3 className="text-base font-bold text-slate-700">{item.name}</h3>
                          <p className="text-[0.9rem] font-normal text-slate-500">{item.description}</p>
                        </div>
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

export default TopicList;
