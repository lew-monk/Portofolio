import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import Project from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import { pageSelector } from "./pageSlice";

const Container = () => {
  const currentPage = useSelector(pageSelector);

  const switchPages = (current) => {
    switch (current) {
      case "Projects":
        return <Project />;

      case "Skills":
        return <Skills />;

      case "About":
        return <About />;

      case "Contact":
        return <Contact />;

      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">{switchPages(currentPage)}</div>
    </div>
  );
};

export default Container;
