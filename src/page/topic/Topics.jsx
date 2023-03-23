import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import JobList from "../../components/job/JobList";
import TopicList from "../../components/topic/TopicList";
import { topics } from "../../components/topic/topics";
import Footer from "../../partials/Footer";
import { majorData } from "../../components/job/majorData";
import * as jobService from "../../services/jobService";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Topics = () => {

    return (
        <div className="flex flex-col min-h-screen overflow-hidden ">
            <header className="body-font">
                <Navbar borderNavBar={true} />
            </header>

            <div className="w-[50%] pt-[60pt] mx-auto mb-[50px]">
                <div className="flex ">
                    <div className="flex-grow mx-[40px] relative">
                        <TopicList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Topics;
