import "./sidebar.scss";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="h-fit w-8 logo" src={logo} alt="BindUP logo" />
          <span className="logoTitle">BindUp</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link> */}
          <Link to="/user_dashboard" style={{ textDecoration: "none" }}>
            <li>
              <NewspaperIcon className="icon" />
              <span>Projects</span>
            </li>
          </Link>
          <Link to="/user_application" style={{ textDecoration: "none" }}>
            <li>
              <StickyNote2Icon className="icon" />
              <span>Applications</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
