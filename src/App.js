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
import ProjectDetail from "./page/dashboard/ProjectDetail";
import JobDetailManager from "./page/dashboard/JobDetailManager";

import Topics from "./page/topic/Topics";
import ProjectsOfTopic from "./page/topic/ProjectsOfTopic";
import UserApplication from "./page/dashboard/UserApplication";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/most-voted" element={<Projects />} />
        <Route path="/project/new" element={<CreateProject />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
        <Route path="/project/1/changelog" element={<ProjectChangeLog />} />
        <Route path="/project/1/members" element={<ProjectMember />} />
        <Route path="/mydetail" element={<EditProfile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic/:id/projects" element={<ProjectsOfTopic />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
        <Route path="/user_dashboard/project/:projectId" element={<ProjectDetail />} />
        <Route path="/user_dashboard/project/job/:jobId" element={<JobDetailManager />} />
        <Route path="/user_application" element={<UserApplication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
