import { FaGithub } from "react-icons/fa";
const Portfolio = () => {
  return (
    <div data-aos="fade" className="aos-init" data-aos-duration="1500">
      <div className="pt-12 md:pt-12 md:pb-4  px-3 sm:px-5 md:px-10 lg:px-14 ">
        {/* Portfolio Heading */}
        <h2
          className="relative text-white text-4xl md:text-5xl font-semibold lg:pb-4 
                    from-[#DD2476] to-[#fa5252ef] 
                    after:content-[''] after:absolute 
                    after:w-48 after:h-[3px]
                    after:hidden sm:after:block 
                    after:bg-gradient-to-l
                    sm:after:top-1/2 lg:after:top-1/3 sm:after:left-40 md:after:left-52 lg:after:left-56
                    after:transform after:translate-y-1/3"
        >
          Portfolio
        </h2>
        {/* Portfolio Display Section */}
        <div className="flex gap-5 flex-col sm:flex-row">
          <div className="left flex flex-col gap-5 pt-5">
            {/* 3 Unice */}
            <a
              href="https://faaiz-unice-lp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="rounded-lg p-6 dark:border-[2px] border-[#212425] "
                style={{ background: "transparent" }}
              >
                <div className="overflow-hidden rounded-lg relative">
                  <img
                    className="w-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    src="/3.png"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 mx-2 mt-4 hover:scale-110 duration-200 transform">
                    <a
                      className="bg-black text-white px-2 py-2 rounded-full"
                      href="https://github.com/faaizamir/Unice-landing-page.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6 inline" />
                    </a>
                  </div>
                </div>
                <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                  Tailwind CSS
                </span>
                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                  Unice - Landing Page
                </h2>
              </div>
            </a>

            {/* 5 AUTH LOGIN*/}
            <a
              href="https://faaiz-auth.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="rounded-lg p-6 dark:border-[2px] border-[#212425] "
                style={{ background: "transparent" }}
              >
                <div className="overflow-hidden rounded-lg relative">
                  <img
                    className="w-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    src="/5.png"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 mx-2 mt-4 hover:scale-110 duration-200 transform">
                    <a
                      className="bg-black text-white px-2 py-2 rounded-full"
                      href="https://github.com/faaizamir/Authentication-with-React-and-Firebase.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6 inline" />
                    </a>
                  </div>
                </div>
                <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                  Firebase
                </span>
                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                  React Authentication
                </h2>
              </div>
            </a>

            {/* 1 ENVER */}
            <a
              href="https://faaiz-enver-lp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="rounded-lg p-6 dark:border-[2px] border-[#212425] "
                style={{ background: "transparent" }}
              >
                <div className="overflow-hidden rounded-lg relative">
                  <img
                    className="w-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    src="/1.png"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 mx-2 mt-4 hover:scale-110 duration-200 transform">
                    <a
                      className="bg-black text-white px-2 py-2 rounded-full"
                      href="https://github.com/faaizamir/enver-landing-page.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6 inline" />
                    </a>
                  </div>
                </div>
                <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                  Vanilla CSS
                </span>
                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                  Enver - Landing Page
                </h2>
              </div>
            </a>
          </div>

          <div className="right flex flex-col gap-5 sm:pt-16">
            {/* 4 Internee */}
            <a
              href="https://faaiz-internee-clone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="rounded-lg p-6 dark:border-[2px] border-[#212425] "
                style={{ background: "transparent" }}
              >
                <div className="overflow-hidden rounded-lg relative">
                  <img
                    className="w-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    src="/4.png"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 mx-2 mt-4 hover:scale-110 duration-200 transform">
                    <a
                      className="bg-black text-white px-2 py-2 rounded-full"
                      href="https://github.com/faaizamir/Internee.pk-Clone.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6 inline" />
                    </a>
                  </div>
                </div>
                <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                  React JS
                </span>
                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                  Internee.pk Clone
                </h2>
              </div>
            </a>

            {/* 2 Upwind */}
            <a
              href="https://faaiz-upwind-lp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="rounded-lg p-6 dark:border-[2px] border-[#212425] "
                style={{ background: "transparent" }}
              >
                <div className="overflow-hidden rounded-lg relative">
                  <img
                    className="w-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    src="/2.png"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 mx-2 mt-4 hover:scale-110 duration-200 transform">
                    <a
                      className="bg-black text-white px-2 py-2 rounded-full"
                      href="https://github.com/faaizamir/Upwind-Landing-Page.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6 inline" />
                    </a>
                  </div>
                </div>
                <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                  Tailwind CSS
                </span>
                <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                  Upwind - Landing Page
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
