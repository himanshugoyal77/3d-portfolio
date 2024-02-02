import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Spline from "@splinetool/react-spline";
import StarCanvas from "./components/main/Starbackground.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="
    bg-[#030014] overflow-y-scroll overflow-x-hidden
    "
    >
      <StarCanvas />
      <App />
    </div>
  </React.StrictMode>
);
