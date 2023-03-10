import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Profile from "./page/user/Profile";
import EditProfile from "./page/user/EditProfile";
import Projects from "./page/project/Projects";
import ProjectInfo from "./page/project/ProjectInfo";
import ProjectChangeLog from "./page/project/ProjectChangeLog";
import ProjectMember from "./page/project/ProjectMember";
import CreateProject from "./page/project/CreateProject";
import Jobs from "./page/job/Jobs";
import JobDetail from "./page/job/JobDetail";
import UserDashboard from "./page/dashboard/UserDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/new" element={<CreateProject />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
        <Route path="/project/1/changelog" element={<ProjectChangeLog />} />
        <Route path="/project/1/members" element={<ProjectMember />} />
        <Route path="/mydetail" element={<EditProfile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/1" element={<JobDetail />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
