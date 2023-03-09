import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import ProjectDetailed from "../../components/project/ProjectDetailed";
import Footer from "../../partials/Footer";

const ProjectChangeLog = () => {
  let param = useParams();
  console.log(param.id);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <header className="body-font">
        <Navbar />
      </header>

      <div className="pt-[60pt] flex-grow mx-auto relative w-full">
        <div className="absolute bg-gradient-to-b from-blue-100 w-full h-[40pt]"></div>
        <ProjectDetailed rating={3} id={param.id} openTabId={4}/>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectChangeLog;
