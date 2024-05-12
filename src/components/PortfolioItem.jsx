/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";

const PortfolioItem = ({
  title,
  imgSrc,
  demoLink,
  githubLink,
  description,
}) => {
  const handleItemClick = () => {
    window.open(demoLink, "_blank");
  };

  const handleGithubClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="portfolio-item" onClick={handleItemClick}>
      <div className="rounded-lg p-6 dark:border-[2px] border-[#212425]">
        <div className="overflow-hidden rounded-lg relative">
          <img
            className="w-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 rounded-lg h-auto"
            src={imgSrc}
            alt={title}
          />
          <div className="absolute top-0 right-0 mx-2 mt-4 hover:scale-110 duration-200 transform">
            <a
              className="bg-black text-white px-2 py-2 rounded-full"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubClick}
            >
              <FaGithub className="w-6 h-6 inline" />
            </a>
          </div>
        </div>
        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
          {description}
        </span>
        <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PortfolioItem;
