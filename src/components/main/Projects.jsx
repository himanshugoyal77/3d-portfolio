import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:py-20"
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
        <ProjectCard
          src="https://github.com/himanshugoyal77/codeSync-realtime-code-editor/assets/92782099/c94fc91a-f77a-471d-919f-51c1d7c90510"
          title="codeSync-realtime-code-editor"
          description="Realtime code collaboration tool with code editor, compiler and realtime cursors"
          liveDemo="https://code-sync-realtime-coding.vercel.app/"
          githubRepo="https://github.com/himanshugoyal77/codeSync-realtime-code-editor"
        />
        <ProjectCard
          src="https://github.com/himanshugoyal77/Next.js-Ecommerce/assets/92782099/30d30920-73b7-43f1-b7e7-cf6088b08120"
          title="Next.js Ecommerce App"
          description="Next.js ecommerce app with admin pannel and stripe payments"
          githubRepo="https://github.com/himanshugoyal77/Next.js-Ecommerce"
          liveDemo="https://next-js-ecommerce-4bb3mjwa3-himanshugoyal77.vercel.app/"
        />
        <ProjectCard
          title="Live Discussion Forum"
          description="Discussion Forum website with realtime chat and comments feature using React and Socket.io"
          src="https://github.com/himanshugoyal77/discussion-forum/assets/92782099/08ebb30a-cbe8-4831-9e31-cb53094baf1b"
          liveDemo="https://h-forum.vercel.app"
          githubRepo="https://github.com/himanshugoyal77/discussion-forum"
        />
        <ProjectCard
          title="PowerBi Data Analysis Projects"
          isImage={true}
          description="PowerBi projects for data analysis and visualization of data on real world datasets."
          src="https://github.com/himanshugoyal77/powerBi-Projects/assets/92782099/0205f3c1-d3bf-4d5b-9b5f-00960183e176"
          liveDemo="undefined"
          githubRepo="https://github.com/himanshugoyal77/powerBi-Projects"
        />

        <ProjectCard
          title="Salon Booking App"
          description="A salon booking app with Stripe payments to make booking process easy"
          src="https://github.com/himanshugoyal77/salon-booking-app/assets/92782099/66fe23f1-5925-4c7c-9b46-5b04f6ad311b"
          liveDemo="undefined"
          githubRepo="https://github.com/himanshugoyal77/salon-booking-app"
        />
      </div>
    </div>
  );
};

export default Projects;
