import React from "react";

import { hiringData } from "./hiringData";
const Hiring = () => {
  return (
    <div>
      <div className="mt-4 text-base font-bold mb-3 text-gray-900">
        Hiring now
      </div>
      <div className="bg-white rounded shadow ">
        {hiringData.map((item, index) => (
          <div className="overflow-hidden sm:flex justify-between pr-5 pl-5 pt-6 pb-1 items-center" key={index}>
            <div>
              <span className="text-f13 font-bold text-gray-900 mb-2 block">{item.name}</span>
              <div className="text-f13 text-gray-500">{item.major}</div>
              <div className="pt-1 text-f13 text-gray-500">{item.work}</div>
            </div>
            <div>
              <img src={item.img} alt="podcast" />
            </div>
          </div>
        ))}

        <div className="px-5 pb-5 text-f13 font-bold text-gray-500">
          Hiring?
          <span className="pl-1 text-hunt">Post a job</span>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
