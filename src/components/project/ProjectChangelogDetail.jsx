import React from "react";
import Comment from "../comment/Comment";
import { commentData } from "../comment/commentData";
import * as changelogService from "../../services/changeLogService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const ReadMore = ({ children }) => {
  const text = children;
  const MAX_LENGTH = 150;
  const [isReadMore, setIsReadMore] = useState(true);
  const [showReadMore, setShowReadMore] = useState(true);
  useEffect(() => {
    if (text.length <= MAX_LENGTH) setShowReadMore(false);
    else setShowReadMore(true);
  }, [text.length]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, MAX_LENGTH) : text}
      {showReadMore ? (
        <span onClick={toggleReadMore} className="read-or-hide cursor-pointer font-[300] text-blue-500">
          {isReadMore ? " ...read more" : " show less"}
        </span>
      ) : (
        ""
      )}
    </p>
  );
};

export const ProjectChangelogDetail = ({ project }) => {
  const param = useParams();
  const [changelogs, setChangelogs] = useState([]);
  const { data } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/changelogs/?projectId=${param.id}`
  );
  useEffect(() => {
    if (data?.data) {
      setChangelogs(data.data);
    }
  }, [data]);

  return (
    <div className="w-full">
      <div className="">
        <h3 className="text-slate-700 font-[700] text-[1.6rem] mb-[5pt]">
          Changes and development of {project?.data?.name}
        </h3>
      </div>
      <div>
        <ol className="relative border-l border-gray-200">
          {changelogs?.length !== 0 ? (
            changelogs?.map((changelog, index) => (
              <li className="mb-10 ml-4" key={index}>
                <div
                  className={
                    (index === 0 ? "bg-[#1939FF] " : "bg-slate-200 ") +
                    "absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white"
                  }
                ></div>
                <time
                  className={
                    (index === 0 ? "text-[#00B1FF] " : "text-slate-400 ") + "mb-1 text-md font-medium leading-none "
                  }
                >
                  {changelog.createdDate}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">{changelog.title}</h3>
                <div className="text-base font-normal text-gray-500">
                  <div className="" dangerouslySetInnerHTML={{ __html: changelog?.description }} />
                </div>
              </li>
            ))
          ) : (
            <div className="font-normal text-slate-400 ">Change Log Is Empty</div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default ProjectChangelogDetail;
