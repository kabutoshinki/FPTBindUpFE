import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import ProjectDetail from "./page/project/ProjectDetail";
import Profile from "./page/user/Profile";
import EditProfile from "./page/user/EditProfile";
import Projects from "./page/project/Projects";
import ProjectInfo from "./page/project/ProjectInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectInfo />} />
        <Route path="/mydetail" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
