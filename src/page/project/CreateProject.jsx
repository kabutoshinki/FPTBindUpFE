import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../partials/Footer";
import HeadCreateProject from "../../components/project/HeadCreateProject";
import BodyCreateProject from "../../components/project/BodyCreateProject";


const CreateProject = () => {

  document.documentElement.scrollTop = 0;


  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <header className="body-font">
        <Navbar />
      </header>

      <div className="pt-[60pt] flex-grow mx-auto relative w-full">
        <div className="absolute bg-gradient-to-b from-blue-100 w-full h-[40pt] -z-1"></div>
        <div className="left-0 right-0 z-20 w-[65%] mx-auto pt-[30px]">
          <HeadCreateProject />
          <BodyCreateProject  />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProject;
