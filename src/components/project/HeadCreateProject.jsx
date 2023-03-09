import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectAboutSection from "./ProjectAboutSection";
import ProjectReview from "./ProjectReviewSection";

export const HeadCreateProject = ({ project }) => {
  return (
    <div className="border-b border-b-slate-200 pb-[20px]" >
      <div className="w-full">
        <h3 className="text-slate-800 text-[1.8rem] font-bold mb-[6px]">{project.name}</h3>
        <p className="text-slate-500">{project.summary}</p>
      </div>
    </div>
  );
};

export default HeadCreateProject;
