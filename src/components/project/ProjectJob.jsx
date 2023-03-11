import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const ProjectJob = ({ project }) => {
  const param = useParams();

  return (
    <div className="w-full">
      <div className="">
        <h3 className="text-slate-700 font-[700] text-[1.6rem] mb-[5pt]">Open positions at {project?.data?.name} project</h3>
      </div>
      <div className="mt-[20pt] pb-[20pt] grid grid-cols-3 gap-[20px]">
        <div className="font-normal text-slate-400">No open positions at this time.</div>
      </div>
    </div>
  );
};

export default ProjectJob;
