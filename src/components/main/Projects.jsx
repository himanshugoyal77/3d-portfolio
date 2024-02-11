import React, { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import ArrowAnimation from "../../../public/arrow.json";
import Lottie from "lottie-react";

const Projects = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [size, setSize] = useState(4);
  const [viewMore, setViewMore] = useState(true);
  const projectsData = [
    {
      id: 0,
      isImage: false,
      title: "codeSync-realtime-code-editor",
      description:
        "Realtime code collaboration tool with code editor, compiler and realtime cursors",
      src: "https://github.com/himanshugoyal77/codeSync-realtime-code-editor/assets/92782099/c94fc91a-f77a-471d-919f-51c1d7c90510",
      liveDemo: "https://code-sync-realtime-coding.vercel.app/",
      githubRepo:
        "https://github.com/himanshugoyal77/codeSync-realtime-code-editor",
    },
    {
      id: 1,
      isImage: false,
      src: "https://github.com/himanshugoyal77/Next.js-Ecommerce/assets/92782099/30d30920-73b7-43f1-b7e7-cf6088b08120",
      title: "Next.js Ecommerce App",
      description:
        "Next.js ecommerce app with admin pannel and stripe payments",
      githubRepo: "https://github.com/himanshugoyal77/Next.js-Ecommerce",
      liveDemo:
        "https://next-js-ecommerce-4bb3mjwa3-himanshugoyal77.vercel.app/",
    },
    {
      id: 2,
      isImage: false,
      title: "Live Discussion Forum",
      description:
        "Discussion Forum website with realtime chat and comments feature using React and Socket.io",
      src: "https://github.com/himanshugoyal77/discussion-forum/assets/92782099/08ebb30a-cbe8-4831-9e31-cb53094baf1b",
      liveDemo: "https://h-forum.vercel.app",
      githubRepo: "https://github.com/himanshugoyal77/discussion-forum",
    },
    {
      id: 3,
      title: "Salon Booking App",
      isImage: false,
      description:
        "A salon booking app with Stripe payments to make booking process easy",
      src: "https://github.com/himanshugoyal77/salon-booking-app/assets/92782099/66fe23f1-5925-4c7c-9b46-5b04f6ad311b",
      liveDemo: "undefined",
      githubRepo: "https://github.com/himanshugoyal77/salon-booking-app",
    },
    {
      id: 4,
      title: "React.js Jenkins CI/CD Pipeline",
      description:
        "CI/CD pipeline for React.js app with Docker, Jenkins and Sonarqube code Analysis",
      src: "/cicd.png",
      isImage: true,
      liveDemo:
        "https://hub.docker.com/repository/docker/himanshug77/quizly/general",
      githubRepo: "https://github.com/himanshugoyal77/casualFunnel-Quiz",
    },
    {
      id: 5,
      title: "PowerBi Data Analysis Projects",
      isImage: true,
      description:
        "PowerBi projects for data analysis and visualization of data on real world datasets.",
      src: "https://github.com/himanshugoyal77/powerBi-Projects/assets/92782099/0205f3c1-d3bf-4d5b-9b5f-00960183e176",
      liveDemo: "undefined",
      githubRepo: "https://github.com/himanshugoyal77/powerBi-Projects",
    },
  ];

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 568) {
      setSmallScreen(true);
    }
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center md:py-20"
      id="projects"
    >
      <h1
        className="text-[40px] font-semibold text-transparent 
      bg-clip-text bg-gradient-to-r from-purple-500
       to-cyan-500 py-20"
      >
        My Projects
      </h1>
      <div
        className="h-full w-full flex flex-col 
      md:grid md:grid-cols-3 gap-10 px-6 md:px-10"
      >
        {projectsData
          .slice(0, smallScreen ? size : projectsData.length)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      {smallScreen && (
        <button
          className="mt-8"
          onClick={() => {
            setViewMore(!viewMore);
            console.log("clicked ");
            console.log(viewMore);
            setSize(viewMore ? projectsData.length : 4);
          }}
        >
          <p
            className=" flex flex-col items-center gap-0 text-xs
          cursor-pointer glow text-white 
      px-3 py-2 rounded-lg
        "
          >
            {!viewMore ? (
              <a href={`#project-${3}`} className="flex flex-col items-center">
                view less{" "}
                <Lottie
                  className="w-10 h-10 rotate-180"
                  animationData={ArrowAnimation}
                />
              </a>
            ) : (
              <a href={`#project-${3}`} className="flex flex-col items-center">
                view more projects <LottieArrow />
              </a>
            )}
          </p>
        </button>
      )}
    </div>
  );
};

const LottieArrow = () => (
  <Lottie className="w-10 h-10" animationData={ArrowAnimation} />
);

export default Projects;
