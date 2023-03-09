import React from "react";
import Asidebar from "../../components/asidebar/Asidebar";
import Main from "../../components/main/Main";
import HeroHome from "../../partials/HeroHome";
import FeaturesHome from "../../partials/Features";
import Footer from "../../partials/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import TodayList from "../../components/todayList/TodayList";
import ProjectList from "../../components/project/ProjectList";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="body-font">
        <Navbar />
      </header>
      <div className="pt-20 flex-grow">
        <HeroHome />
        <FeaturesHome />
        <div className="container mx-auto px-5">
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
            <div className="col-span-4 sm:col-span-4 lg:col-span-4">
              <ProjectList />
              <Main />
              <TodayList />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <Asidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
