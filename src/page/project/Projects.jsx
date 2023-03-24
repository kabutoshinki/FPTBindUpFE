import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import ProjectList from "../../components/project/ProjectList";
import { topics } from "../../components/topic/topics";
import Footer from "../../partials/Footer";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Projects = () => {

  const [sortKey, setSortKey] = useState("created_date");

  const [selectedMilestones, setSelectedMilestones] = React.useState({
    idea: false,
    upcoming: false,
    launching: false,
    finished: false,
  });
  console.log(selectedMilestones);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <header className="body-font">
        <Navbar borderNavBar={true} />
      </header>

      <div className="w-[65%] pt-[60pt] mx-auto mb-[50px]">
        <div className="flex ">
          <div className="w-[25%] border-r-[1px] border-r-slate-200 mt-[60px]">
            <div className="sort-project pb-[30px] mr-[40px] border-b-[1px] border-b-slate-200 ">
              <h3 className="mb-[20px] font-[600] text-[0.9rem] text-slate-600 uppercase">Sort project by</h3>
              <div className="flex flex-col space-y-2 text-[1rem]">
                <Link
                  to={"/projects"}
                  onClick={(e) => setSortKey("created_date") }
                  className={"font-medium " + (sortKey === "created_date" ? "text-[#1939FF]" : "text-slate-400 font-normal")}
                >
                  Newest
                </Link>
                <Link
                  to={"/projects"}
                  onClick={(e) => setSortKey("vote_quantity") }
                  className={"font-medium " + (sortKey === "vote_quantity" ? "text-[#1939FF]" : "text-slate-400 font-normal")}
                >
                  Most Voted
                </Link>
              </div>
            </div>
            <div className="filter-project">
              <h3 className="my-[20px] font-[600] text-[0.9rem] text-slate-600 uppercase">Milestones</h3>
              <ul className="w-full text-sm font-medium ">
                <li className="w-full group hover:bg-slate-50">
                  <div className="flex items-center">
                    <input
                      id="idea-checkbox"
                      type="checkbox"
                      checked={selectedMilestones.idea}
                      className="w-4 h-4 text-blue-600 border-slate-400 rounded focus:ring-transparent"
                      onChange={(e) =>
                        setSelectedMilestones({
                          ...selectedMilestones,
                          idea: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor="idea-checkbox"
                      className="w-full py-3 ml-2 font-normal text-slate-500 group-hover:text-blue-600"
                    >
                      Idea
                    </label>
                  </div>
                </li>
                <li className="w-full group hover:bg-slate-50">
                  <div className="flex items-center">
                    <input
                      id="upcoming-checkbox"
                      type="checkbox"
                      checked={selectedMilestones.upcoming}
                      onChange={(e) =>
                        setSelectedMilestones({
                          ...selectedMilestones,
                          upcoming: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 border-slate-400 rounded focus:ring-transparent"
                    />
                    <label
                      htmlFor="upcoming-checkbox"
                      className="w-full py-3 ml-2 font-normal text-slate-500 group-hover:text-blue-600"
                    >
                      Upcoming
                    </label>
                  </div>
                </li>
                <li className="w-full group hover:bg-slate-50">
                  <div className="flex items-center">
                    <input
                      id="launching-checkbox"
                      type="checkbox"
                      checked={selectedMilestones.launching}
                      onChange={(e) =>
                        setSelectedMilestones({
                          ...selectedMilestones,
                          launching: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 border-slate-400 rounded focus:ring-transparent"
                    />
                    <label
                      htmlFor="launching-checkbox"
                      className="w-full py-3 ml-2 font-normal text-slate-500 group-hover:text-blue-600"
                    >
                      Launching
                    </label>
                  </div>
                </li>
                <li className="w-full group hover:bg-slate-50">
                  <div className="flex items-center">
                    <input
                      id="finished-checkbox"
                      type="checkbox"
                      checked={selectedMilestones.finished}
                      onChange={(e) =>
                        setSelectedMilestones({
                          ...selectedMilestones,
                          finished: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 border-slate-400 rounded focus:ring-transparent"
                    />
                    <label
                      htmlFor="finished-checkbox"
                      className="w-full py-3 ml-2 font-normal text-slate-500 group-hover:text-blue-600"
                    >
                      Finished
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="filter-project">
              <h3 className="my-[20px] font-[600] text-[0.9rem] text-slate-600 uppercase">Topics</h3>
              <div className="flex flex-col justify-start space-y-2">
                {topics.map((item, index) => (
                  <Link to="#" key={index} className="text-[1rem] font-normal text-slate-400 hover:text-blue-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[75%] flex-grow mx-[40px] relative">
            {/* <div className="absolute bg-gradient-to-b from-blue-50 w-full h-[40pt]"></div> */}
            <ProjectList sortKey={sortKey} selectedMilestones={selectedMilestones} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
