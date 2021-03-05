import { Transition } from "react-transition-group";
import { animateProjectsIn, animateProjectsOut } from "./helpers/transitions";

const ANIMATION_DONE_EVENT = "animation::done";

const Projects = () => {
  const addEndListener = (node, done) =>
    node.addEventListener(ANIMATION_DONE_EVENT, done);

  return (
    <Transition
      unmountOnExit
      appear
      addEndListener={addEndListener}
      onEnter={animateProjectsIn}
      onExit={animateProjectsOut}
      in={true}
    >
      <div className="projects-container">
        <div className="header">
          <h1>Projects</h1>
        </div>
        <div className="project-container">
          <div className="project-img">
            <img
              src={window.location.origin + "/assets/image/monk.jpeg"}
              alt="project"
            />
          </div>
          <div className="project-info">
            <p className="project-title">Komboa Rentals</p>
            <p className="project-desc">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <a href="#">Link</a>
          </div>
          <div className="project-img">
            <img
              src={window.location.origin + "/assets/image/monk.jpeg"}
              alt="project"
            />
          </div>
          <div className="project-info">
            <p className="project-title">Mwaura's Portofolio</p>
            <p className="project-desc">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <a href="#">Link</a>
          </div>
          <div className="project-img">
            <img
              src={window.location.origin + "/assets/image/monk.jpeg"}
              alt="project"
            />
          </div>
          <div className="project-info">
            <p className="project-title">Wanyama Finder</p>
            <p className="project-desc">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Projects;
