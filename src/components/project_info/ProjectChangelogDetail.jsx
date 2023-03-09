import React from "react";
import Comment from "../comment/Comment";
import { commentData } from "../comment/commentData";
import * as changelogService from "../../services/changeLogService";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
export const ProjectChangelogDetail = ({ rating }) => {
  const param = useParams();
  const [changelogs, setChangelogs] = useState([]);
  const { data } = useFetch(
    `http://fhunt-env.eba-pr2amuxm.ap-southeast-1.elasticbeanstalk.com/api/v1/changelog/?projectId=${param.id}`
  );
  useEffect(() => {
    if (data?.data) {
      setChangelogs(data.data);
    }
  }, [data]);

  return (
    <div className="w-full">
      <div className="">
        <ol className="relative border-l border-gray-200">
          {changelogs?.length !== 0 ? (
            changelogs?.map((changelog, index) => (
              <li className="mb-10 ml-4" key={index}>
                <div className="absolute w-3 h-3 bg-[#1939FF] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-md font-medium leading-none text-[#00B1FF]">{changelog.createdDate}</time>
                <h3 className="text-lg font-semibold text-gray-900">{changelog.title}</h3>
                <p className="text-base font-normal text-gray-500">{changelog.title}</p>
              </li>
            ))
          ) : (
            <div className="font-bold">Change Log Is Empty</div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default ProjectChangelogDetail;
