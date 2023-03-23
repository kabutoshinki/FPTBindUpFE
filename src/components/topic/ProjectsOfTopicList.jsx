import React from "react";
import useFetch from "../../hooks/useFetch";
import img_default from "../../assets/images/no_img.png";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import * as projectService from "../../services/projectService";
import { click } from "@testing-library/user-event/dist/click";
import { toast } from "react-toastify";


const ProjectsOfTopicList = ({ id }) => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const [numOfPages, setNumOfPages] = useState(0);
  const { data, loading, reFetch } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/topic/${id}/projects/?pageNo=${currentPage}&pageSize=5&sortBy=id&statusType=0`
  );

  useEffect(() => {
    setProjects(data);
  }, [data]);
  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
  };
  const handleVote = async (e, projectId) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("user").replace(/"/g, "");
      console.log(userId);
      await projectService.projectVote(projectId, userId);
      reFetch();
      toast.success("vote success");
    } catch (error) {
      console.log(error);
      toast.error("vote fail");
    }
  };

  return (
    <div className="mx-auto">
      <div className=" mt-[40px] mb-[25px]">
        {/* <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[15px]">{data.name}</h3> */}
        <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[15px]">Tech</h3>
        {/* <p className="text-slate-500">There are <span className="font-[600] text-slate-600"> {projects.data?.length} projects</span> out there!</p> */}
        <p className="text-slate-500">Hardware or software. Invention or innovation. If someone’s pushing technology forward, you’ll find it here.</p>
      </div>
      <div className="flex items-center justify-between mb-[10px]">
        <div className="relative w-[250px] mr-[40px]">
          <input
            className="text-f13 px-[10px] py-[10px] pr-[35px] w-full rounded border border-slate-200 focus:border-grey-500 outline-none placeholder:text-slate-400 transition-colors duration-200 ease-in-out"
            placeholder="Search by name ..."
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
              {projects?.data?.projectDTOList?.map((item, index) => (
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
                      <button
                        className="absolute bg-white w-[70px] my-auto right-[35px] border border-slate-200 group hover:border-blue-600 rounded"
                        onClick={(e) => handleVote(e, item.id)}
                      >
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
      )}
    </div>
  );
};

export default ProjectsOfTopicList;
