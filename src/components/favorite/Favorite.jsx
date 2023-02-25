import React from "react";
import { favoriteList } from "./listFavorite";
import { Link } from "react-router-dom";
const Favorite = () => {
  return (
    <div className="">
      <h2 className="flex text-f20 text-left text-slate-700 font-bold mb-3">Your next favorite thing</h2>
      <div className="flex bg-white overflow-hidden sm:flex items-center mb-6">
        <div className="flex w-full">
          <ul className="w-full">
            {favoriteList.map((item, index) => (
              <li key={index}>
                <div className="flex items-center py-[25px] mb-[20px] relative hover:bg-gradient-to-bl hover:from-blue-50 hover:via-white hover:to-white">
                  <div>
                    <img className="w-14 h-14" src={item.img} alt="hunt" />
                  </div>
                  <div className="ml-[30px]">
                    <h3 className="text-base font-bold text-slate-700">{item.title}</h3>
                    <p className="text-f13 font-normal">
                      <span>{item.description}</span>
                    </p>
                  </div>
                  <button className="absolute bg-white w-[70px] my-auto right-[35px] border border-slate-200 group hover:border-blue-600 rounded">
                    <div className="flex-col align-center items-center px-[10px] py-2 inset-y-3 text-slate-400 group-hover:text-blue-600">
                      <svg
                        className="w-[12px] h-[12px] m-auto"
                        viewBox="0 0 26 22"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-[0.8rem] font-semibold mt-1 block">{item.vote}</span>
                    </div>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Favorite;
