import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const pageName =
      path === "/"
        ? "Home"
        : path.replace("/", "").charAt(0).toUpperCase() +
          path.replace("/", "").slice(1);

    document.title = `${pageName} | Rohit Kumar`;
  }, [location]);

  return null;
};

export default PageTitle;
