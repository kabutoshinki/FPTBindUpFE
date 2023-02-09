import React from "react";
// import Hiring from "./Hiring";
// import Newsletter from "./Newsletter";
import Kittycard from "../../assets/kitty-card.png";
import Hiring from "../hiring/Hiring";
import Newsletter from "../newsletter/NewLetter";
import { asidebarData } from "./asidebarData";
const Asidebar = () => {
  return (
    <aside>
      <div className="relative">
        <img src={Kittycard} alt="" />
        <div className="absolute bottom-25 left-25">
          <button className="bg-white text-f11 font-bold uppercase items-center inline-flex border border-gray-300 mr-2 py-2 px-3 rounded mt-4 md:mt-0">
            <span className="f13 text-hunt">Winner announced</span>
          </button>
        </div>
      </div>
      <div>
        <div className="mt-3 text-base font-bold mb-3 text-gray-900">
          Upcomming Products
          <span className="text-f13 ml-2 text-gray-500 font-normal">Powered by Ship</span>
        </div>
        <div className="bg-white rounded shadow ">
          {asidebarData.map((item) => (
            <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
              <div>
                <span className="text-f13 font-bold text-gray-900 mb-2 block">{item.title}</span>
                <div className="text-f13 text-gray-500">{item.description}</div>
                <div className="flex text-f11 font-medium mt-3">
                  <img className="mr-1" src={item.icon} alt="plus" />
                  FOLLOW ({item.follow})
                </div>
              </div>
              <div>
                <img src={item.img} alt="podcast" />
              </div>
            </div>
          ))}

          <div className="p-5 flex">
            <button className="w-full font-bold text-f11 items-center bg-white border border-gray-300 uppercase py-2 focus:outline-none hover:bg-gray-200 rounded text-base ">
              <span className="f12 text-hunt">view all</span>
            </button>
          </div>
        </div>

        <Hiring />
        <Newsletter />
      </div>
    </aside>
  );
};

export default Asidebar;
