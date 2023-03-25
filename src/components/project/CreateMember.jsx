import React, { useState } from "react";
import AddMemberModal from "../popup/AddMemberModal";
import * as projectMemberService from "../../services/projectMemberService";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const CreateMember = ({ setOpenTab }) => {
  const [openModal, setOpenModal] = useState(false);
  const [members, setMembers] = useState([]);

  const ProjectMembers = async () => {
    const projectId = localStorage.getItem("newProjectId");
    const { data } = await projectMemberService.getMembersProject(projectId);
    console.log(data.data);
    setMembers(data?.data);
  };

  const onCreateSuccess = () => {
    ProjectMembers();
  };
  useEffect(() => {
    ProjectMembers();
  }, []);
  return (
    <div className="h-content mx-[40px] flex flex-col mb-[40px]">
      <div className=" pb-[30px] mb-[30px] ">
        <h3 className="font-semibold text-slate-500 text-[1.3rem] mb-[15px]">
          Introduce the people behind your project
        </h3>
        <p className="font-[400] text-slate-700 text-[1rem] mb-[20px]">
          You can add another user as member of the project
        </p>
        <div>
          <button
            className="flex items-center border border-slate-500 text-slate-500 hover:border-blue-700 hover:text-blue-500 py-2 px-4 rounded"
            onClick={() => setOpenModal(true)}
          >
            <svg className="w-6 h-6 mr-[5px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path d="M15 6H21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M18 3L18 9"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Member
          </button>
        </div>
        <div>
          <div className="mt-[20pt] pb-[20pt] grid grid-cols-3 gap-[20px]">
            {members ? (
              members?.map((member, index) => (
                <div className="flex items-center space-x-4" key={index}>
                  <img className="w-10 h-10 rounded-full" src="/no_img.png" alt="" />
                  <div className="font-medium w-full flex justify-between items-center">
                    <div>
                      <span>{member.name}</span>
                      <Link to={"/"} className="text-sm text-slate-400 font-normal italic">
                        {member.title}
                      </Link>
                      <p className="text-sm text-blue-700 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="font-normal text-slate-400">List Member Is Empty</div>
            )}
          </div>
        </div>
        <AddMemberModal open={openModal} onClose={() => setOpenModal(false)} onCreateSuccess={onCreateSuccess} />
      </div>

      <div className="flex items-center justify-between">
        {/* <Link to={"/project/" + localStorage.getItem("newProjectId")}> */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              setOpenTab(4);
              document.documentElement.scrollTop = 0;
            }}
          >
            Next step: Add topics & mentors
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default CreateMember;
