import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DashboardNavbar from "../../components/dashboard_navbar/DashboardNavbar";
import DatatableProjects from "../../components/datatable/DatatableProjects";
import { Navbar } from "../../components/navbar/Navbar";

const ListProjects = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        {/* <DashboardNavbar /> */}
        <Navbar borderNavBar={true}/>
        <DatatableProjects />
      </div>
    </div>
  );
};

export default ListProjects;
