import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "./components/sub/Footer.jsx";
import StarCanvas from "./components/main/Starbackground.jsx";
import Navbar from "./components/main/Navbar.jsx";
import TimeLine from "./components/main/Timeline.jsx";
import Skills from "./components/main/Skills.jsx";
import Projects from "./components/main/Projects.jsx";
import Work from "./components/main/Work.jsx";
import ContactForm from "./components/main/ContactForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="w-full smooth bg-[#030014] overflow-x-hidden
    "
    >
      <StarCanvas />
      <Navbar />
      <App />
      <Skills />
      <Projects />
      <TimeLine />
      <Work />
      <ContactForm />
      <Footer />
    </div>
  </React.StrictMode>
);
