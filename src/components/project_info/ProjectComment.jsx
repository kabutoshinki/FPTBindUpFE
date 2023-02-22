import React from "react";
import avatar from "../../assets/user_avatar/ava_1.jpg";
import { Rating } from "@mui/material";
import { ReactComponent as HelpfulIcon } from "../../assets/icons/helpful.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icons/reply.svg";
import { ReactComponent as ReportIcon } from "../../assets/icons/report.svg";

export const ProjectComment = () => {

    const rating = 4;
    return (
        <div className="w-full">
            <div className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full" src={avatar} alt="" />
                <div className="font-medium w-full flex justify-between items-center">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 ">Feb. 8, 2023</div>
                </div>
            </div>
            <div className="my-[5pt] ">
                <Rating className="read-only" value={rating} readOnly size="small" />
            </div>
            <div>
                <div className="border-b-[1px] border-b-slate-100">
                    <p className="text-slate-600 ">I switched from Weebly to WebWave and have used this platform to design and host over 45 websites with new websites being added each month. The website editor works differently to anything else on the market and gives me the confidence to take on just about any project for small to medium business clients. Global delivery is powered by the KeyCDN network and VPS servers in Australia and USA facilitate a fast, fully hosted solution for any web designer or digital agency looking for a solid white label design platform. New design features are added just about every month. Combine all of this with super responsive online support and you can forget the rest. WebWave is the real deal.</p>
                    <div className="flex items-center mt-4 space-x-4">
                        <button type="button"
                            className="flex items-center text-sm text-slate-400 hover:underline">
                            <HelpfulIcon />
                            Helpful
                        </button>
                        <button type="button"
                            className="flex items-center text-sm text-slate-400 hover:underline">
                            <ReplyIcon />
                            Reply
                        </button>
                        <button type="button" className="flex items-center text-sm text-slate-400 hover:underline">
                            <ReportIcon />
                            Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectComment;