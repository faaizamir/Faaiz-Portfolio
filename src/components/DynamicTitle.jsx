import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const getTitle = () => {
      switch (location.pathname) {
        case "/":
          return "Faaiz Amir - Portfolio";
        case "/about":
          return "About - Faaiz Amir";
        case "/resume":
          return "Resume - Faaiz Amir";
        case "/portfolio":
          return "Portfolio - Faaiz Amir";
        case "/contact":
          return "Contact - Faaiz Amir";
        default:
          return "Faaiz Amir - Portfolio";
      }
    };

    document.title = getTitle();
  }, [location]);

  return null;
};

export default DynamicTitle;
