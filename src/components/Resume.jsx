const Resume = () => {
  return (
    <div data-aos="fade" className="aos-init" data-aos-duration="1500">
      <div className="pt-12 md:py-12 px-3 sm:px-5 md:px-10 lg:px-14 ">
        {/* Resume Heading */}
        <h2
          className="relative text-white text-4xl  md:text-5xl font-semibold lg:pb-4 
                      from-[#DD2476] to-[#fa5252ef] 
                      after:content-[''] after:absolute 
                      after:w-48 after:h-[3px]
                      after:hidden sm:after:block 
                      after:bg-gradient-to-l
                      sm:after:top-1/2 lg:after:top-1/3 sm:after:left-40 md:after:left-52 lg:after:left-56
                      after:transform after:translate-y-1/3"
        >
          Resume
        </h2>

        {/* Resume Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
            {/* Education Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-3xl text-[#F95054]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                </svg>
                <h4 className="text-3xl text-white font-medium">Education</h4>
              </div>
              <div
                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2"
                style={{ background: "transparent" }}
              >
                <span className="text-tiny text-gray-lite text-[#b7b7b7]">
                  2023 - Present
                </span>
                <h3 className="text-xl text-white">BS in Computer Science</h3>
                <p className="text-[#b7b7b7]">
                  Sindh Madressah tul University, Karachi.
                </p>
              </div>
              <div
                className="py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 border-[#212425] border-2"
                style={{ background: "transparent" }}
              >
                <span className="text-tiny text-gray-lite text-[#b7b7b7]">
                  2020 - 2022
                </span>
                <h3 className="text-xl text-white">Pre-Engineering</h3>
                <p className="text-[#b7b7b7]">
                  Govt. Islamia Science College, Karachi.
                </p>
              </div>
              <div
                className="py-4 pl-5 pr-3 space-y-2 rounded-lg border-[#212425] border-2"
                style={{ background: "transparent" }}
              >
                <span className="text-tiny text-gray-lite text-[#b7b7b7]">
                  2018 - 2019
                </span>
                <h3 className="text-xl text-white">Computer Science</h3>
                <p className="text-[#b7b7b7]">
                  St. Lawrence Grammar School, Karachi.
                </p>
              </div>
            </div>
            {/* Experience section */}
            <div>
              <div className="flex items-center space-x-2 mb-4 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-3xl text-[#F95054]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
                </svg>
                <h4 className="text-3xl text-white font-medium">Experience</h4>
              </div>
              <div
                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg border-[#212425] border-2"
                style={{ background: "transparent" }}
              >
                <span className="text-tiny text-gray-lite text-[#b7b7b7]">
                  2024 - March
                </span>
                <h3 className="text-xl text-white">React JS Intern</h3>
                <p className="text-[#b7b7b7]">Internee.pk - Remote</p>
              </div>
              <div
                className="py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 border-[#212425] border-2"
                style={{ background: "transparent" }}
              >
                <span className="text-tiny text-gray-lite text-[#b7b7b7]">
                  2022 - 2023
                </span>
                <h3 className="text-xl text-white">Sr. Sales Executive</h3>
                <p className="text-[#b7b7b7]">24/7 Artworks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
