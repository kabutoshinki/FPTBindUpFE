import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import ProjectDetail from "./page/project/ProjectDetail";
import Profile from "./page/user/Profile";
import EditProfile from "./page/user/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<ProjectDetail />} />
        <Route path="/mydetail" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
