import React from "react";
import useFetch from "../../hooks/useFetch";
import img_default from "../../assets/images/no_img.png";
import Loading from "../loading/Loading";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { data, loading } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/project/?pageNo=${currentPage}&pageSize=5&sortBy=id`
  );
  useEffect(() => {
    setProjects(data);
  }, [data]);

  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <div className=" mb-3 flex flex-row justify-between items-center">
        <h2 className="text-f20 text-left text-gray-900 text-xl lg:text-1xl font-bold">Project List</h2>
        <span className="text-f11 uppercase font-medium">
          <a className="mr-2" href="javascript.void(0)">
            popular
          </a>
          <a className="mr-2" href="javascript.void(0)">
            newest
          </a>
        </span>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6">
          <div className="flex w-full">
            <ul className="w-full">
              {projects.data?.map((item, index) => (
                <li key={index}>
                  <Link to={`/project/${item.id}`}>
                    <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                      <div>
                        <img className="w-20 h-20" src={item.logo || img_default} alt="product hunt" />
                      </div>
                      <div className="ml-2">
                        <h3 className="text-base font-bold text-gray-900">{item.name}</h3>
                        <p className="text-f13 font-normal">
                          <a href="javascript.void(0)">{item.summary}</a>
                        </p>
                      </div>
                      <div className="absolute top-25 right-40 border border-gray-200 rounded">
                        <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                          <svg
                            className="m-auto"
                            width="12"
                            height="11"
                            viewBox="0 0 26 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                              fill="black"
                            />
                          </svg>
                          <span className="text-f13 font-semibold mt-1 block text-center">{item.voteQuantity}</span>
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
      <ReactPaginate
        previousLabel={"previous"}
        breakLabel={"..."}
        nextLabel={"next"}
        pageCount={3}
        onPageChange={handlePageClick}
        containerClassName={"inline-flex -space-x-px mb-4"}
        pageLinkClassName={
          "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        previousLinkClassName={
          "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        nextLinkClassName={
          "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        breakLinkClassName={
          "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        activeLinkClassName={
          "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        }
      />
    </div>
  );
};

export default ProjectList;
