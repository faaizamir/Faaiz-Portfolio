// import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
// import Icon1 from "/icon-1.svg";
// import Icon2 from "/icon-1.svg";
// import Icon3 from "/icon-1.svg";
// import Icon4 from "/icon-1.svg";
// import Icon5 from "/icon-1.svg";
// import Icon6 from "/icon-1.svg";
import Card from "./Card";
const About = () => {
  return (
    <div className="pt-12 md:py-12 px-3 sm:px-5 md:px-10 lg:px-14 ">
      <h2 className="after-effect after:left-52 text-white text-4xl md:text-5xl font-medium lg:pb-4">
        About Me
      </h2>
      <div className="lg:hidden">
        <div>
          {/* <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
            <img src="/static/media/avatar.418c8afc380507acd425.jpg" className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="Monalisa Ashley" />
            <div className="pt-[100px] pb-8">
              <h1 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">Monalisa Ashley</h1>
              <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">Ui/Ux Designer</h3>
              <div className="flex justify-center space-x-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#1773EA]"><FaFacebookF /></span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#1C9CEA]"><FaTwitter /></span>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#e14a84]"><FaDribbble /></span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#0072b1]"><FaLinkedinIn /></span>
                </a>
              </div>
            </div>
          </div> */}
          <Card />
        </div>
      </div>
      <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-1">
        <h3 className="text-[35px] dark:text-white font-medium pb-5">
          What I do!
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-2 border-[#212425] rounded-xl p-5">
          <div className="about-box bg-transparent flex gap-5">
            <img
              className="w-10 h-10 object-contain block"
              src={Icon1}
              alt=""
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Ui/Ux Design
              </h3>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-2 border-[#212425] rounded-xl p-5">
          <div className="about-box bg-transparent flex gap-5">
            <img
              className="w-10 h-10 object-contain block"
              src={Icon1}
              alt=""
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Ui/Ux Design
              </h3>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-2 border-[#212425] rounded-xl p-5">
          <div className="about-box bg-transparent flex gap-5">
            <img
              className="w-10 h-10 object-contain block"
              src={Icon1}
              alt=""
            />
            <div className="space-y-2 break-all">
              <h3 className="dark:text-white text-xl font-semibold">
                Ui/Ux Design
              </h3>
              <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
        <div className="col-span-12 space-y-2.5">
          <div className="lg:mr-16">
            <p className="text-[#a6a6a6] leading-7">
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media. I enjoy turning
              complex problems into simple, beautiful and intuitive designs.
            </p>
            <p className=" leading-7 mt-2.5 text-[#a6a6a6]">
              My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
          </div>
        </div>
      </div> */}
      
      
    </div>
  );
};

export default About;
