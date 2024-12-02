import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiMysql, SiNetlify } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import Card from "./Card";
import "../App.css";

const About = () => {
  return (
    <div data-aos="fade" className="aos-init" data-aos-duration="1500">
      <div className="pt-12 md:pt-12">
        {/* About Me Heading */}
        <div className="px-3 sm:px-5 md:px-10 lg:px-14 ">
          <h2
            className="relative text-white text-4xl md:text-5xl font-semibold lg:pb-4 
                        from-[#DD2476] to-[#fa5252ef] 
                        after:content-[''] after:absolute 
                        after:w-48 after:h-[3px]
                        after:hidden sm:after:block 
                        after:bg-gradient-to-l
                        sm:after:top-1/2 md:after:top-1/3 sm:after:left-52 md:after:left-64 
                        after:transform after:translate-y-1/3
                        "
          >
            About Me
          </h2>
        </div>

        {/* Responsive Card */}
        <div className="lg:hidden px-3 sm:px-5 md:px-10 lg:px-14 ">
          <div>
            <Card />
          </div>
        </div>

        {/* About Content */}
        {/* <p className="text-[#A6A6A6] pt-4 px-3 sm:px-5 md:px-10 lg:px-14 ">
          Hello! I am{" "}
          <span className="font-semibold text-xl text-[#fa5252ef] ">Faaiz</span>
          , a dedicated{" "}
          <span className="font-semibold text-lg rounded-xl   text-[#fa5252ef] ">
            Front-end Developer,
          </span>{" "}
          currently pursuing a Bachelor&apos;s in Computer Science. I am skilled
          in using HTML, CSS, JavaScript, Tailwind CSS, and React JS.
          <br />
          <br />
          I focus on building attractive and smoothly working websites, always
          making sure my code is neat and effective. I am also dedicated to
          learning more about React.js to improve my skills in front-end
          development.
          <br />
          <br />
          My goal is to create websites that are both useful and beautiful. I
          take pride in my work and always strive to exceed expectations on
          every project. I am a proactive learner and I am always looking for
          ways to improve my skills and solve new problems.
        </p> */}
        <p className="text-[#A6A6A6] pt-4 px-3 sm:px-5 md:px-10 lg:px-14 ">
          Hello! I am{" "}
          <span className="font-semibold text-xl text-[#fa5252ef] ">Faaiz</span>
          , a dedicated{" "}
          <span className="font-semibold text-lg rounded-xl   text-[#fa5252ef] ">
            Front-end Developer
          </span>{" "}
           with solid experience in
          React.js. I enjoy creating smooth, interactive interfaces that make
          websites both functional and visually appealing. Right now, I’m
          learning Next.js to take my skills to the next level.<br /><br />I love turning
          ideas into real, working websites that people can use and enjoy. My
          focus is always on writing clean code and designing layouts that work
          well and look great.<br /><br />When I’m not coding, I’m usually exploring new
          tools and techniques to improve what I do. I’m always looking for
          better ways to solve problems and build something meaningful.
        </p>

        {/* What I do */}
        <div className="pb-4 my-10 px-3 sm:px-5 md:px-10 lg:px-14 ">
          <h3 className="text-4xl text-white font-semibold pb-4 md:pb-10">
            What I do!
          </h3>
          <div className="grid grid-flow-row gap-4 lg:grid-cols-1 xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 ">
            <div className="flex gap-5 items-center border-2 border-[#212425] rounded-xl p-6">
              <img
                className="w-10 h-10 object-contain block"
                src="/web.svg"
                alt=""
              />
              <div className="space-y-2 break-all">
                <h3 className="text-[16px] 2xl:text-xl text-white font-medium">
                  Website Development
                </h3>
              </div>
            </div>
            <div className="flex gap-5 items-center border-2 border-[#212425] rounded-xl p-6">
              <img
                className="w-10 h-10 object-contain block"
                src="/manage.svg"
                alt=""
              />
              <div className="space-y-2 break-all">
                <h3 className="text-lg 2xl:text-xl text-white font-semibold">
                  Managment
                </h3>
              </div>
            </div>
            <div className="flex gap-5 items-center border-2 border-[#212425] rounded-xl p-6">
              <img
                className="w-10 h-10 object-contain block"
                src="/icon-1.svg"
                alt=""
              />
              <div className="space-y-2 break-all">
                <h3 className="text-lg 2xl:text-xl text-white font-semibold">
                  Problem Solving
                </h3>
              </div>
            </div>
            <div className="flex gap-5 items-center border-2 border-[#212425] rounded-xl p-6">
              <img
                className="w-10 h-10 object-contain block"
                src="resp.svg"
                alt=""
              />
              <div className="space-y-2 break-all">
                <h3 className="text-lg 2xl:text-xl text-white font-semibold">
                  Responsive Design
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="w-full bg-[#0d0d0d] relative px-3 sm:px-5 md:px-10 lg:px-14 py-6">
          <div className="pb-4 px-2 sm:px-5 md:px-10 lg:px-1 my-6">
            <h3 className="text-5xl text-white font-bold pb-4 md:pb-10">
              Skills & Tools
            </h3>
            <div className=" grid grid-flow-row gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <FaHtml5 className=" socialIcon w-12 h-12 object-contain block text-[#E34F26]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    HTML
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <FaCss3Alt className="socialIcon w-12 h-12 object-contain block text-[#1572B6]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    CSS
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <RiTailwindCssFill className="socialIcon w-12 h-12 object-contain block text-[#22D3EE]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    Tailwind
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <IoLogoJavascript className="socialIcon w-12 h-12 object-contain block text-[#F7DF1E]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    JavaScript
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <FaReact className="socialIcon w-12 h-12 object-contain block text-[#61DAFB]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    ReactJS
                  </h3>
                </div>
              </div>
              
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <FaNodeJs className="socialIcon w-12 h-12 object-contain block text-[#339933]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    NodeJS
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                {/* <SiMysql className="socialIcon w-12 h-12 object-contain block text-[#007ACC]" /> */}
                {/* <RiNextjsFill className="socialIcon w-12 h-12 object-contain block fill-black" /> */}
                <RiNextjsLine className="socialIcon w-12 h-12 object-contain block text-black"/>
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    NextJS
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                {/* <FaGitAlt className="socialIcon w-12 h-12 object-contain block text-[#FC6D26]" /> */}
                <SiTypescript className="socialIcon w-12 h-12 object-contain block text-[#3178c6]"/>
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    TypeScript
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <FaGithub className="socialIcon w-12 h-12 object-contain block text-[#181717]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    Github
                  </h3>
                </div>
              </div>
              
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <FaFigma className="socialIcon w-12 h-12 object-contain block text-[#A259FF]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    Figma
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <VscVscode className="socialIcon w-12 h-12 object-contain block text-[#007ACC]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    VS Code
                  </h3>
                </div>
              </div>
              <div className="cardItem flex gap-5 items-center flex-col justify-center border-2 border-[#212425] rounded-xl p-6 bg-secondary">
                <SiNetlify className="socialIcon w-12 h-12 object-contain block text-[#00C7B7]" />
                <div className="space-y-2 break-all">
                  <h3 className="text-white text-center text-sm md:text-lg lg:text-sm 2xl:text-lg font-medium">
                    Netlify
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
