import React from "react";

const ProjectCard = ({
  isImage = false,
  src,
  title,
  description,
  liveDemo,
  githubRepo,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg 
    border w-full border-[#2A0E61] md:h-[420px]"
    >
      {!isImage ? (
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          src={src}
          alt={title}
          className="h-[250px] w-full object-cover"
        />
      ) : (
        <img
          src={src}
          alt={title}
          className="h-[250px] w-full object-contain bg-white"
        />
      )}

      <div className=" p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      <div
        className="mb-4 mt-2 mx-4 flex items-center
      gap-3 justify-end
      "
      >
        {liveDemo === "undefined" ? (
          <button className="cursor-default">
            <a className=" bg-slate-800 px-4 py-2 rounded-md text-white font-semibold">
              Live Demo
            </a>
          </button>
        ) : (
          <button>
            <a
              href={liveDemo}
              className=" cursor-pointer bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-md text-white font-semibold"
            >
              Live Demo
            </a>
          </button>
        )}

        <button>
          <a
            href={githubRepo}
            className=" cursor-pointer bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-md text-white font-semibold"
          >
            Github Repo
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
