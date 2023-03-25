import React, { useState } from "react";
import CreateGeneralInfo from "./CreateGeneralInfo";
import CreateImage from "./CreateImage";
import CreateMember from "./CreateMember";
import CreateExtras from "./CreateExtras";

export const BodyCreateProject = () => {
  const [openTab, setOpenTab] = useState(1);
 
  document.documentElement.scrollTop = 0;
  return (
    <div className="w-full h-fit flex">
      <div className="py-[20px] mt-4 w-[25%] flex flex-col space-y-4">
        <div
          onClick={() => setOpenTab(1)}
          className={` ${openTab === 1 ? "text-blue-600 bg-blue-50" : "text-slate-700"
            } cursor-pointer py-[5px] inline-block mr-[20px] rounded hover:bg-blue-50`}
        >
          <div className="flex items-center space-x-[15px]">
            <h3 className="text-[1.5rem] font-[500] ">🎉</h3>
            <h3 className="text-[1rem] font-[500] ">General Info</h3>
          </div>
        </div>
        <div
          onClick={() => setOpenTab(2)}
          className={` ${openTab === 2 ? "text-blue-600 bg-blue-50" : "text-slate-700"
            } cursor-pointer py-[5px] inline-block mr-[20px] rounded hover:bg-blue-50`}
        >
          <div className="flex items-center space-x-[15px]">
            <h3 className="text-[1.5rem] font-[500] ">🔭</h3>
            <h3 className="text-[1rem] font-[500] ">Logo & Image</h3>
          </div>
        </div>
        <div
          onClick={() => setOpenTab(3)}
          className={` ${openTab === 3 ? "text-blue-600 bg-blue-50" : "text-slate-700"
            } cursor-pointer py-[5px] inline-block mr-[20px] rounded hover:bg-blue-50`}
        >
          <div className="flex items-center space-x-[15px]">
            <h3 className="text-[1.5rem] font-[500] ">👋</h3>
            <h3 className="text-[1rem] font-[500] ">Members</h3>
          </div>
        </div>
        <div
          onClick={() => setOpenTab(4)}
          className={` ${openTab === 4 ? "text-blue-600 bg-blue-50" : "text-slate-700"
            } cursor-pointer py-[5px] inline-block mr-[20px] rounded hover:bg-blue-50`}
        >
          <div className="flex items-center space-x-[15px]">
            <h3 className="text-[1.5rem] font-[500] ">✈️</h3>
            <h3 className="text-[1rem] font-[500] ">Extras</h3>
          </div>
        </div>

      </div>
      <div className="py-[20px] mt-4 w-[75%]">
        <div className={openTab === 1 ? "block" : "hidden"}>
          <CreateGeneralInfo setOpenTab={setOpenTab} />
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <CreateImage setOpenTab={setOpenTab}/>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <CreateMember setOpenTab={setOpenTab}/>
        </div>
        <div className={openTab === 4 ? "block" : "hidden"}>
          <CreateExtras />
        </div>
      </div>

    </div>
  );
};

export default BodyCreateProject;
