import { useSelector } from "react-redux";

import SideBar from "./SideBar";
import Project from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import { pageSelector } from "./pageSlice";
import { useDispatch } from "react-redux";
import { currentPage } from "./pageSlice";

const Container = () => {
  const nextPage = useSelector(pageSelector);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    document.querySelector(".mobile-links").classList.toggle("menu-translate");
  };

  const handleProjects = () => {
    document.querySelector(".mobile-links").classList.toggle("menu-translate");
    dispatch(currentPage("Projects"));
  };

  const handleSkills = () => {
    document.querySelector(".mobile-links").classList.toggle("menu-translate");
    dispatch(currentPage("Skills"));
  };

  const handleAbout = () => {
    document.querySelector(".mobile-links").classList.toggle("menu-translate");
    dispatch(currentPage("About"));
  };

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
    <div>
      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">{switchPages(nextPage)}</div>
      </div>
      <div className="mobile">
        <div className="mobile-nav">
          <div className="side-container">
            <SideBar />
          </div>
          <img
            src={window.location.origin + "/assets/image/menu.png"}
            alt="burger-menu"
            className="burger-menu"
            onClick={handleMenuClick}
          />
        </div>
        <div className="mobile-links">
          <ul className="links">
            <li className="mob-link" onClick={handleProjects}>
              Projects
            </li>
            <li className="mob-link" onClick={handleSkills}>
              Skills
            </li>
            <li className="mob-link" onClick={handleAbout}>
              About
            </li>
          </ul>
        </div>
        <div className="mobile-content">{switchPages(nextPage)}</div>
      </div>
    </div>
  );
};

export default Container;
