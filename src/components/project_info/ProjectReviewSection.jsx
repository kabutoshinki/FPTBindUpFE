import React from "react";
import ProjectRating from "./ProjectRating";
import Comment from "../comment/Comment";
import { commentData } from "../comment/commentData";

export const ProjectReview = ({ rating }) => {
    return (
        <div className="w-full">
            <div className="">
                {/* replace WebWave with name of project */}
                <h3 className="text-slate-700 font-[700] text-[1.6rem] mb-[5pt]">What do people think of WebWave?</h3>
                <p>The community submitted 88 reviews to tell us what they like about WebWave, what WebWave can do better, and more.</p>
            </div>
            <div className="mt-[20pt] pb-[20pt] border-b-2 border-b-slate-200">
                <ProjectRating />
            </div>
            <div className="mb-[20pt] ">
                {commentData.map((item, index) => (
                    <Comment key={index} commentItem={item} />
                ))}
            </div>
        </div>
    );
};

export default ProjectReview;