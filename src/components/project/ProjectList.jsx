import React from "react";
import useFetch from "../../hooks/useFetch";
import img_default from "../../assets/images/no_img.png";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import * as projectService from "../../services/projectService";
import * as userService from "../../services/userService";
import { click } from "@testing-library/user-event/dist/click";
import { toast } from "react-toastify";

const ProjectList = ({ selectedMilestones, sortKey }) => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [voteMessage, setVoteMessage] = useState("");
  const [upvotedProject, setUpvotedProject] = useState([])

  // console.log(searchTerm);
  var milestonesApi = "";
  var nameKeyWordApi = "";
  var sortBy = "&sortBy=created_date";
  if (sortKey === "vote_quantity") {
    sortBy = "&sortBy=vote_quantity&ascending=DESC";
  }

  const milestone = () => {
    if (selectedMilestones?.idea) {
      milestonesApi += "&milestoneType=0";
    }
    if (selectedMilestones?.upcoming) {
      milestonesApi += "&milestoneType=1";
    }
    if (selectedMilestones?.launching) {
      milestonesApi += "&milestoneType=2";
    }
    if (selectedMilestones?.finished) {
      milestonesApi += "&milestoneType=3";
    }
    return milestonesApi;
  };

  const nameKeyword = () => {
    if (searchTerm !== "") {
      nameKeyWordApi += "&nameKeyWord=" + searchTerm;
    }
    return nameKeyWordApi;
  };

  const { data, loading, reFetch } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/projects?pageNo=${currentPage}&pageSize=5${sortBy}&statusType=0${nameKeyword()}${milestone()}`
  );
  var upvoted = []
  const User = async () => {
    const userId = localStorage.getItem("user").replace(/"/g, "");
    const { data } = await userService.findUserById(userId);
    for (var project of data?.data?.votes) upvoted.push(project.id);
    setUpvotedProject(upvoted);
  };

  useEffect(() => {
    setProjects(data);
    User();
    console.log("Upvoted: ", upvoted);
  }, [data]);
  const handlePageClick = async (data) => {
    setCurrentPage(data.selected);
  };
  const voteSuccessId = "vote-success";
  const voteFailId = "vote-fail";
  const handleVote = async (e, projectId) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("user").replace(/"/g, "");
      console.log(userId);
      await projectService.projectVote(projectId, userId).then((res) => {
        console.log("Vote message: ", res.data.message);
        setVoteMessage(res.data.message);

        if (upvotedProject.includes(projectId)) {
          var newUpvoted = []
          for (let prj in upvotedProject) {
            if (prj === projectId) continue;
            newUpvoted.push(prj)
          }
          setUpvotedProject(newUpvoted);
        } else {
          upvotedProject.push(projectId);
          setUpvotedProject(upvotedProject);
        }
      });
      toast.success(voteMessage + " successfully!");
      reFetch();
    } catch (error) {
      // console.log(error);
      toast.error("vote fail", {
        toastId: voteFailId,
      });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="mx-auto">
      <div className=" mt-[60px] mb-[25px]">
        <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[15px]">🚀 Browse more projects!</h3>
        {/* <p className="text-slate-500">There are <span className="font-[600] text-slate-600"> {projects.data?.length} projects</span> out there!</p> */}
        <p className="text-slate-500">Discover the best projects of your friends, teammates, or colleagues.</p>
      </div>
      <div className="flex items-center justify-between mb-[10px]">
        <div className="relative w-[250px] mr-[40px]">
          <input
            className="text-f13 px-[10px] py-[10px] pr-[35px] w-full rounded border border-slate-200 focus:border-grey-500 outline-none placeholder:text-slate-400 transition-colors duration-200 ease-in-out"
            placeholder="Search by name ..."
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
        {projects?.data?.numOfPages !== 0 ? (
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
        ) : null}
      </div>
      {loading ? (
        // <Loading className="mx-auto" />
        <LinearProgress />
      ) : (
        <div className="flex bg-white overflow-hidden sm:flex items-center mb-6">
          <div className="flex w-full">
            {
              projects?.data?.projectDTOWithTopicList?.length > 0
                ? (<ul className="w-full">
                  {projects?.data?.projectDTOWithTopicList?.map((item, index) => (
                    <li key={index}>
                      <Link to={`/project/${item.id}`}>
                        <div className="flex items-center py-[25px] mb-[20px] relative hover:bg-gradient-to-bl hover:from-blue-50 hover:via-white hover:to-white">
                          <div>
                            <img className="w-16 h-16 rounded-md" src={item.logo || img_default} alt="product hunt" />
                          </div>
                          <div className="ml-[30px]">
                            <div className="flex items-center space-x-4">
                              <h3 className="text-base font-bold text-slate-700 mr-[5px]">{item.name}</h3>
                              {item.milestone === 0 && (
                                <span className="bg-orange-100 text-orange-800 fond-medium text-[12px] px-2.5 py-0.5">
                                  Idea
                                </span>
                              )}
                              {item.milestone === 1 && (
                                <span className="bg-sky-100 text-sky-800 fond-medium text-[12px] px-2.5 py-0.5">
                                  Upcoming
                                </span>
                              )}
                              {item.milestone === 2 && (
                                <span className="bg-green-100 text-green-800 fond-medium text-[12px] px-2.5 py-0.5">
                                  Launching
                                </span>
                              )}
                              {item.milestone === 3 && (
                                <span className="bg-slate-100 text-slate-800 fond-medium text-[12px] px-2.5 py-0.5">
                                  Closing
                                </span>
                              )}
                            </div>
                            <p className="text-[0.9rem] font-normal text-slate-500">{item.summary}</p>
                            <div className="mt-[8px] flex items-center space-x-4 text-[0.9rem] font-normal text-slate-500">
                              {item.topicDTOList?.map((topic, topicIndex) => (
                                <p key={topicIndex}>#{topic.shortName}</p>
                              ))}
                            </div>
                          </div >
                          <button
                            className={"absolute text-slate-500 bg-white w-[70px] my-auto right-[35px] border border-slate-200 group hover:border-blue-600 rounded " + ((upvotedProject.includes(item.id)) ? "border-blue-600 text-blue-600" : "")}
                            onClick={(e) => handleVote(e, item.id)}
                          >
                            <div className="flex-col align-center items-center px-[10px] py-2 inset-y-3 group-hover:text-blue-600">
                              <svg className="w-[12px] h-[12px] m-auto" viewBox="0 0 26 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z" fill="currentColor" />
                              </svg>
                              <span className="text-[0.8rem] font-semibold mt-1 block text-center">
                                {item.voteQuantity}
                              </span>
                            </div>
                          </button>
                        </div >
                      </Link >
                    </li >
                  ))}
                </ul >)
                : (<div className="mx-auto my-[80px] text-[28px] text-slate-300 font-[500]">No projects founded!</div>)
            }
          </div >
        </div >

      )}
    </div>
  );
};

export default ProjectList;
