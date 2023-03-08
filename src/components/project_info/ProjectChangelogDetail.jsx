import React from "react";
import Comment from "../comment/Comment";
import { commentData } from "../comment/commentData";

export const ProjectChangelogDetail = ({ rating }) => {
    return (
        <div className="w-full">
            <div className="">
                <ol className="relative border-l border-gray-200">
                <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-[#1939FF] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <time className="mb-1 text-md font-medium leading-none text-[#00B1FF]">April 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900">E-Commerce UI code in Tailwind CSS</h3>
                        <p className="text-base font-normal text-gray-500">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <time className="mb-1 text-md font-medium leading-none text-slate-500">March 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900">Marketing UI design in Figma</h3>
                        <p className="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <time className="mb-1 text-md font-medium leading-none text-slate-500">February 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900">Application UI code in Tailwind CSS</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        
                    </li>
                    
                   
                </ol>

            </div>
        </div>
    );
};

export default ProjectChangelogDetail;