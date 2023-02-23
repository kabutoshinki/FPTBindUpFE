import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import ProjectList from "../../components/project_info/ProjectList";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <header className="body-font">
        <Navbar />
      </header>

      <div className="pt-[60pt] flex-grow mx-auto relative w-full">
        <div className="absolute bg-gradient-to-b from-blue-100 w-full h-[40pt]"></div>
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
