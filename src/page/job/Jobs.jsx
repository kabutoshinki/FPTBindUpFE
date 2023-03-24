import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import JobList from "../../components/job/JobList";
import { topics } from "../../components/topic/topics";
import Footer from "../../partials/Footer";
import { majorData } from "../../components/job/majorData";
import * as jobService from "../../services/jobService";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Jobs = () => {
    const [sortKey, setSortKey] = useState("due_date");
    const [checkDueDate, setCheckDueDate] = React.useState({
        desc: false,
        asc: false,
    });

    return (
        <div className="flex flex-col min-h-screen overflow-hidden ">
            <header className="body-font">
                <Navbar borderNavBar={true} />
            </header>

            <div className="w-[65%] pt-[60pt] mx-auto mb-[50px]">
                <div className="flex ">
                    <div className="w-[25%] border-r-[1px] border-r-slate-200 mt-[60px]">
                        <div className="filter-project">
                            <h3 className="mt-[50px] mb-[10px] font-[600] text-[0.9rem] text-slate-600 uppercase">SORT JOBS BY</h3>
                            <ul className="w-full text-sm font-medium">
                                <li className="w-full group hover:bg-slate-50">
                                    <div className="flex items-center">
                                        <input
                                            defaultChecked
                                            id="default-radio-2" type="radio" value="" name="default-radio"
                                            className="w-4 h-4 text-blue-600 border-slate-400 focus:ring-transparent"
                                            onChange={(e) => {
                                                setCheckDueDate({
                                                    ...checkDueDate,
                                                    desc: e.target.checked,
                                                });
                                                setSortKey("created_date_desc");
                                            }}
                                            checked={checkDueDate.desc} />
                                        <label htmlFor="default-radio-2" className="w-full py-3 ml-2 font-normal text-slate-500 group-hover:text-blue-600">Due date descending</label>
                                    </div>
                                </li>
                                <li className="w-full group hover:bg-slate-50">
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="default-radio-1" type="radio" value="" name="default-radio"
                                            className="w-4 h-4 text-blue-600 border-slate-400 focus:ring-transparent"
                                            onChange={(e) => {
                                                setCheckDueDate({
                                                    ...checkDueDate,
                                                    asc: e.target.checked,
                                                });
                                                setSortKey("created_date_asc");
                                            }}
                                            checked={checkDueDate.asc} />
                                        <label htmlFor="default-radio-1" className="w-full py-3 ml-2 font-normal text-slate-500 group-hover:text-blue-600">Due date ascending</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <button className="w-[80%] mr-[20px] py-[5px] border border-blue-600 rounded text-blue-600 hover:bg-blue-50">
                            Apply
                        </button> */}
                    </div>
                    <div className="w-[75%] flex-grow mx-[40px] relative">
                        <JobList sortKey={sortKey} checkDueDate={checkDueDate} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Jobs;
