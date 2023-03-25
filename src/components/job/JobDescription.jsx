import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import * as jobService from "../../services/jobService";
import * as projectService from "../../services/projectService";
import useFetch from "../../hooks/useFetch";
import { async } from "@firebase/util";
import * as applicationService from "../../services/applicationService";
import { toast } from "react-toastify";
export const JobDescription = ({ id }) => {
  const [job, setJob] = useState();
  const [project, setProject] = useState();

  const { data } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/jobs/${id}/detail`
  );
  const [formData, setFormData] = useState({
    description: "",
    projectId: "",
    jobId: "",
    userId: "",
  });

  useEffect(() => {
    if (data) {
      const userId = localStorage.getItem("user").replace(/"/g, "");
      setFormData({
        description: "I want to apply Job" || "",
        projectId: data?.data?.projectId || "",
        jobId: data?.data?.id || "",
        userId: userId || "",
      });
    }
  }, [data]);
  console.log(data);
  const Project = async () => {
    console.log("project id: ", data?.data?.projectId);
    const { dt } = await projectService.getProjectById(data?.data?.projectId);
    console.log("Project data:", dt);
    setProject(dt?.data);
  };

  useEffect(() => {
    setJob(data);
    Project();
  }, [data]);

  console.log("Jobs: ", data?.data);
  console.log("project: ", project);

  const handleApply = async () => {
    try {
      await applicationService.apply(formData);
      toast.success("Apply Success");
    } catch (error) {
      toast.error("Apply Fail");
    }
  };
  // const [job, setJob] = useState();
  // const { data } = useFetch(`http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/projects/${id}`);

  // document.documentElement.scrollTop = 0;
  // useEffect(() => {
  //   setJob(data);
  //   console.log("Jobs: ", data);
  // }, [data]);
  return (
    <div className="left-0 right-0 z-10 p-[20px] w-[67%] mx-auto">
      <div className="mx-auto flex flex-col justify-between items-start pt-[40px] ">
        <div className="mb-[20px]">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/jobs">
              Jobs
            </Link>
            {/* <Typography color="text.primary">Data Engineer</Typography> */}
            <Typography color="text.primary">{job?.data?.name}</Typography>
          </Breadcrumbs>
        </div>
        <div className="w-full flex">
          {/* Left */}
          <div className="py-[20px] w-[75%] mr-[20px]">
            <div className="flex items-center">
              <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[6px]">{job?.data?.name}</h3>
              {/* <h3 className="mr-[20px] text-slate-800 text-3xl font-bold mb-[6px]">{job.name}</h3> */}
            </div>
            <div>{job?.data?.description}</div>
          </div>

          {/* Right */}
          <div className="py-[20px] mt-4 float-right">
            <div className="w-[250px] h-fit p-[20px] shadow border border-slate-300 rounded-md flex flex-col justify-center items-center">
              <div className="w-full flex flex-col items-center border-b border-b-slate-300 pb-[20px] mb-[20px]">
                <img
                  className="object-cover rounded-full h-16 w-16 mb-[10px]"
                  src="/no_img.png"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/no_img.png";
                  }}
                  alt="BindUP logo"
                />
                <h3 className="font-[500] text-slate-600 text-lg">{data?.data?.projectName}</h3>
                {/* <h3 className="font-[500] text-slate-600 text-lg">{job.project.name}</h3> */}
              </div>
              <div className="">
                <div className="flex items-center justify-center mb-[20px]">
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
                    {job?.data?.dueDate}
                  </p>
                </div>
                <button
                  onClick={handleApply}
                  type="button"
                  className="w-full flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-[500] rounded text-[1rem] px-5 py-2.5 mr-2 mb-2"
                >
                  Send
                  <svg className="w-5 h-5 ml-[5px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 14L13 21L20 4L3 11L6.5 12.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <Link to={`/project/${data?.data?.projectId}`}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center text-blue-600 border border-blue-700 hover:border-blue-800 font-[500] rounded text-[1rem] px-5 py-2.5 mr-2 mb-2"
                  >
                    Visit project
                    <svg
                      className="w-7 h-7 mr-[10px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
