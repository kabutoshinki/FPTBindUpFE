import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as memberProjectService from "../../services/projectMemberService";

export const ProjectReview = ({ project }) => {
  const param = useParams();
  const [members, setMembers] = useState([]);
  const Members = async () => {
    const { data } = await memberProjectService.getMembersProject(param.id);
    setMembers(data?.data);
  };
  useEffect(() => {
    Members();
  }, [param.id]);
  console.log("Project member detail:", project);
  return (
    <div className="w-full">
      <div className="">
        <h3 className="text-slate-700 font-[700] text-[1.6rem] mb-[5pt]">
          People behind {project?.data?.name} project
        </h3>
        <p>Here are the founders, developers, designers and product people who worked at {project?.data?.name}</p>
      </div>
      <div className="mt-[20pt] pb-[20pt] grid grid-cols-3 gap-[20px]">
        {members?.length !== 0 ? (
          members.map((member, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <img className="w-10 h-10 rounded-full" src="/no_img.png" alt="" />
              <div className="font-medium w-full flex justify-between items-center">
                <div>
                  <span>
                    {member.name} <br />
                  </span>
                  <Link to={"/"} className="text-sm text-slate-400 font-normal italic">
                    {member.title}
                  </Link>
                  <p className="text-sm text-slate-700 font-medium">{member.role}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="font-normal text-slate-400">List Member Is Empty</div>
        )}
      </div>
    </div>
  );
};

export default ProjectReview;
