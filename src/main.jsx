import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Spline from "@splinetool/react-spline";
import StarCanvas from "./components/main/Starbackground.jsx";
import Navbar from "./components/main/Navbar.jsx";
import Sidebar from "./components/sub/Sidebar.jsx";
import TimeLine from "./components/main/Timeline.jsx";
import Skills from "./components/main/Skills.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="
    bg-[#030014] overflow-x-hidden
    "
    >
      <StarCanvas />
      <Navbar />
      <App />
    </div>
  </React.StrictMode>
);
