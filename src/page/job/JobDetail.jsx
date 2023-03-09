import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import JobDescription from "../../components/job/JobDescription";
import Footer from "../../partials/Footer";

const ProjectInfo = () => {
  let param = useParams();
  console.log(param.id);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <header className="body-font">
        <Navbar />
      </header>

      <div className="pt-[60pt] flex-grow mx-auto relative w-full">
        <div className="absolute bg-gradient-to-b from-blue-100 w-full h-[40pt]"></div>
        <JobDescription rating={3} id={param.id} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectInfo;
