import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Unice - Landing Page",
      imgSrc: "/3.png",
      demoLink: "https://faaiz-unice-lp.netlify.app/",
      githubLink: "https://github.com/faaizamir/Unice-landing-page.git",
      description: "Tailwind CSS",
    },
    {
      title: "React Authentication",
      imgSrc: "/5.png",
      demoLink: "https://faaiz-auth.netlify.app/",
      githubLink:
        "https://github.com/faaizamir/Authentication-with-React-and-Firebase.git",
      description: "Firebase",
    },
    {
      title: "Enver - Landing Page",
      imgSrc: "/1.png",
      demoLink: "https://faaiz-enver-lp.netlify.app/",
      githubLink: "https://github.com/faaizamir/enver-landing-page.git",
      description: "Vanilla CSS",
    },
    {
      title: "Internee.pk Clone",
      imgSrc: "/4.png",
      demoLink: "https://faaiz-internee-clone.netlify.app/",
      githubLink: "https://github.com/faaizamir/Internee.pk-Clone.git",
      description: "React JS",
    },
    {
      title: "Upwind - Landing Page",
      imgSrc: "/2.png",
      demoLink: "https://faaiz-upwind-lp.netlify.app/",
      githubLink: "https://github.com/faaizamir/Upwind-Landing-Page.git",
      description: "Tailwind CSS",
    },
  ];

  const leftPortfolioItems = portfolioItems.slice(
    0,
    Math.ceil(portfolioItems.length / 2)
  );
  const rightPortfolioItems = portfolioItems.slice(
    Math.ceil(portfolioItems.length / 2)
  );

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
            {leftPortfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>

          <div className="right flex flex-col gap-5 sm:pt-16">
            {rightPortfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
