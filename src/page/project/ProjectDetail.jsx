import React from "react";
import ProjectInfo from "../../components/project_info/ProjectInfo"
import Footer from '../../partials/Footer';
import { Navbar } from "../../components/navbar/Navbar";

const ProjectDetail = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <header className="body-font">
        <Navbar />
      </header>

      <div className="pt-[60pt] flex-grow mx-auto relative w-full">
        <div className="absolute bg-gradient-to-b from-blue-100 w-full h-[40pt]">
        </div>
        <ProjectInfo rating={3} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
