import { useDispatch } from "react-redux";
import { currentPage } from "./pageSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleProjects = () => {
    dispatch(currentPage("Projects"));
  };

  const handleSkills = () => {
    dispatch(currentPage("Skills"));
  };

  const handleAbout = () => {
    dispatch(currentPage("About"));
  };
  const handleContact = () => {
    dispatch(currentPage("Contact"));
  };

  return (
    <div className="sidebar-container">
      <div className="profile">
        <div className="profile-container">
          <img
            src={window.location.origin + "/assets/image/profilePic.jpeg"}
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="profile-info">
          <h1> Mwaura Lewis</h1>
          <h2> Web Developer</h2>
        </div>
      </div>
      <div className="nav-links">
        <div className="link" onClick={handleProjects}>
          <img
            src={window.location.origin + "/assets/image/projectsvg.svg"}
            alt="projects"
            stroke="#6057B8"
          />
          <h2>Projects</h2>
        </div>
        <div className="link" onClick={handleSkills}>
          <img
            src={window.location.origin + "/assets/image/skillssvg.svg"}
            alt="skills"
          />
          <h2>Skills</h2>
        </div>
        <div className="link" onClick={handleAbout}>
          <img
            src={window.location.origin + "/assets/image/aboutsvg.svg"}
            alt="about"
          />
          <h2>About</h2>
        </div>
      </div>
      <div className="contact-cta">
        <button className="cta" onClick={handleContact}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default SideBar;
