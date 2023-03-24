import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import ProjectDetailed from "../../components/project/ProjectDetailed";
import Footer from "../../partials/Footer";

const ProjectInfo = () => {
  let param = useParams();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <header className="body-font">
        <Navbar activePage={"Projects"} />
      </header>

      <div className="pt-[60pt] flex-grow mx-auto relative w-full">
        <div className="absolute bg-gradient-to-b from-blue-100 w-full h-[40pt]"></div>
        <ProjectDetailed id={param.id} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectInfo;
