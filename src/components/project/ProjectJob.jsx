import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export const ProjectJob = ({ project }) => {
  const param = useParams();
  const [jobs, setJobs] = useState([]);
  console.log(param.id);
  const { data } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/jobs/${param.id}`
  );
  console.log(data);
  useEffect(() => {
    if (data?.data) {
      setJobs(data?.data);
    }
  }, [data]);
  return (
    <div className="w-full">
      <div className="">
        <h3 className="text-slate-700 font-[700] text-[1.6rem] mb-[5pt]">
          Open positions at {project?.data?.name} project
        </h3>
      </div>
      <div className="mt-[20pt] pb-[20pt]">
        {jobs.length !== 0 ? (
          <ul className="w-full">
            {jobs.map((job, index) => (
              <li key={index}>
                {/* <Link to={jobService.getJobById(item.id)}> */}
                {/* <Link to={`/job/${item.id}`}> */}
                <Link to={"/job/1"}>
                  <div className="flex justify-between items-center h-[110px] rounded px-[20px] py-[15px] mb-[20px] relative hover:bg-gradient-to-bl hover:from-[#e6f7ff] hover:via-white hover:to-white">
                    <div className="flex items-center h-full">
                      <img
                        className="w-14 h-14 my-auto"
                        src={job?.projectLogo}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = "/no_img.png";
                        }}
                        alt={job?.project + " logo"}
                      />
                      <div className="ml-[30px] h-full flex flex-col justify-between">
                        {/* vote quantity of project is placed in the bracket */}
                        <p className="text-[0.9rem] font-[500] text-slate-500">{job?.project}</p>
                        <h3 className="text-[1.3rem] font-bold text-slate-700">{job?.title}</h3>
                        <div className="flex items-center space-x-[20px]">
                          <p className="text-[0.8rem] font-[500] text-slate-400 flex items-center">
                            <svg
                              className="w-4 h-4 mr-[5px]"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                            {job?.dueDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-0 m-0 h-full flex flex-col items-end justify-between">
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
          <div className="font-normal text-slate-400">No open positions at this time.</div>
        )}
      </div>
    </div>
  );
};

export default ProjectJob;
