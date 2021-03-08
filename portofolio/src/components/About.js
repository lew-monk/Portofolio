import { Transition } from "react-transition-group";
import {
  animateProjectsIn,
  animateProjectsOut,
  addEndListener,
} from "./helpers/transitions";

const About = () => {
  return (
    <Transition
      unmountOnExit
      appear
      addEndListener={addEndListener}
      onEnter={animateProjectsIn}
      onExit={animateProjectsOut}
      in={true}
    >
      <div>
        <div className="header">
          <h1>About</h1>
        </div>
        <div className="about-container">
          <div>
            <h1>Hello! I'm Mwaura Lewis</h1>
          </div>
          <div className="about-info">
            <p className="project-desc">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default About;
