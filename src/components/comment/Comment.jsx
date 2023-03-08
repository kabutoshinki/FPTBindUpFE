import React from "react";
import avatar_1 from "../../assets/user_avatar/ava_1.jpg";
import { Rating } from "@mui/material";
import { ReactComponent as HelpfulIcon } from "../../assets/icons/helpful.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icons/reply.svg";
import { ReactComponent as ReportIcon } from "../../assets/icons/report.svg";
import { Link } from "react-router-dom";

export const Comment = ({ commentItem }) => {
  return (
    <div className="w-full py-[20pt] border-b-2 border-b-slate-200">
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 rounded-full" src={avatar_1} alt="" />
        <div className="font-medium w-full flex justify-between items-center">
          <div>
            <p>{commentItem.user}</p>
            <Link to={"/"} className="text-sm text-slate-400 font-normal italic">
              {commentItem.username}
            </Link>
          </div>
          <div className="text-sm text-gray-500 ">{commentItem.postedDate}</div>
        </div>
      </div>
      <div className="my-[5pt] ">
        <Rating className="read-only" value={commentItem.rating} readOnly size="small" />
      </div>
      <div>
        <div className="border-b-[0.5px] border-b-slate-100">
          <p className="text-slate-600 ">{commentItem.comment}</p>
          <div className="flex items-center mt-4 space-x-4">
            <button type="button" className="flex items-center text-sm text-slate-400 hover:underline">
              <HelpfulIcon />
              Helpful
            </button>
            <button type="button" className="flex items-center text-sm text-slate-400 hover:underline">
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
      {/* reply section */}
      {/* <div className="mt-[20px] ml-[30px] border-l-[1px] border-l-slate-300 pl-[20px]">
                <div className="flex items-center space-x-4">
                    <img className="w-10 h-10 rounded-full" src={avatar_2} alt="" />
                    <div className="font-medium w-full flex justify-between items-center">
                        <div>
                            <p>Janusz Mirowski</p>
                            <a href="/" className="font-sm text-slate-400 font-normal italic">@janusz_mirowski</a>
                        </div>
                        <div className="text-sm text-gray-500 ">Feb. 8, 2023</div>
                    </div>
                </div>
                <div className="mt-[10px]">
                    <div className="border-b-[1px] border-b-slate-100">
                        <p className="text-slate-600 ">Great review Tony!</p>
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
            </div> */}
    </div>
  );
};

export default Comment;
