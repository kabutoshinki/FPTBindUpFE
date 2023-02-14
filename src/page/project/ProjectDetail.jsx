import React from "react";
import ProjectHeading from "../../components/project_info/ProjectHeading"
import Footer from '../../partials/Footer';
import { Navbar } from "../../components/navbar/Navbar";

const ProjectDetail = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="body-font">
        <Navbar />
      </header>
      <div className="pt-20 flex-grow mx-auto w-[75%]">
        <ProjectHeading rating={3}/>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
