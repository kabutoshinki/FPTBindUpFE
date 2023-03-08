import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import JobList from "../../components/job/JobList";
import { topics } from "../../components/topic/topics";
import Footer from "../../partials/Footer";
import { majorData } from "../../components/job/majorData";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Jobs = () => {
    var currentOpt = true;
    return (
        <div className="flex flex-col min-h-screen overflow-hidden ">
            <header className="body-font">
                <Navbar />
            </header>

            <div className="w-[65%] pt-[60pt] mx-auto mb-[50px]">
                <div className="flex ">
                    <div className="w-[25%] border-r-[1px] border-r-slate-200 mt-[60px]">
                        <div className="filter-project">
                            <h3 className="my-[20px] font-[600] text-[0.9rem] text-slate-600 uppercase">Major</h3>
                            <ul className="w-full text-sm font-medium ">
                                {majorData.map((item, index) => (
                                    <li key={index} className="w-full group hover:bg-slate-50">
                                        <div className="flex items-center">
                                            <input
                                                id={'string' + item.name.toLowerCase() + '-checkbox'}
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 text-blue-600 border-slate-400 rounded focus:ring-transparent"
                                            />
                                            <label
                                                for={'string' + item.name.toLowerCase() + '-checkbox'}
                                                className="w-full py-3 ml-2 font-normal text-slate-500 group-hover:text-blue-600"
                                            >
                                                {item.name}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-[75%] flex-grow mx-[40px] relative">
                        <JobList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Jobs;