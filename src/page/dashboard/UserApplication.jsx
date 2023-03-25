import React from "react";
import "./single.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import logo from "../../assets/logo.png";
import { Navbar } from "../../components/navbar/Navbar";
import DatatableUserApply from "../../components/datatable/DatatableUserApply";
import DatatableProjects from "../../components/datatable/DatatableProjects";
import DatatableApplications from "../../components/datatable/DatatableApplications";

const UserApplication = () => {
  const param = useParams();

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar borderNavBar={true} />
        <DatatableApplications />
      </div>
    </div>
  );
};

export default UserApplication;
