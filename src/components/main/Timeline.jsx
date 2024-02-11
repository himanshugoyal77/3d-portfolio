function TimeLine() {
  return (
    <div
      id="education"
      className="flex flex-col items-center justify-center md:px-10 mx-auto 
      md:w-[70%] pb-12"
    >
      <h1
        className="text-[40px] font-semibold text-transparent 
      bg-clip-text bg-gradient-to-r from-purple-500 text-center
       to-cyan-500 py-20"
      >
        Past Education & Work Experience
      </h1>
      <ul
        className="timeline timeline-snap-icon max-md:timeline-compact 
      timeline-vertical text-white ml-10"
      >
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end pb-6">
            <time className="font-mono italic">2019</time>
            <div className="text-lg">SSC - class 10th</div>
            <div className="text-lg font-black text-white">
              Subhedar Wada High school Kalyan
            </div>
            <span className="text-white">94.80%</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2019-2021</time>
            <div className="text-lg font-black">HSC - class 12th</div>
            <div className="text-lg">B. K. Birla College of science Kalyan</div>
            <span className="text-white">91.66%</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2021-2025</time>
            <div className="text-lg font-black">Bachelor's of Engineering</div>
            <div className="">
              Vivekanand Education Society's Institute of Technology (VESIT)
            </div>
            <span className="text-white">9.10 CGPA</span>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default TimeLine;
