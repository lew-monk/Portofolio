import { Helmet } from "react-helmet";
import { Transition } from "react-transition-group";
import { animateProjectsIn, animateProjectsOut } from "./helpers/transitions";

const ANIMATION_DONE_EVENT = "animation::done";

const Skills = () => {
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
      <div>
        <div className="header">
          <h1>Skills</h1>
        </div>
        <div className="skills-container">
          <div className="skills">
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/react.png"}
                alt="react"
              />
              <div className="shadow"></div>

              <h2>REACT</h2>
            </div>
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/nodejs.webp"}
                style={{ width: "60%" }}
                alt="nodejs"
              />
              <div className="shadow"></div>

              <h2>NodeJs</h2>
            </div>
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/js-logo.png"}
                alt="javascript"
              />
              <div className="shadow"></div>

              <h2>JavaScript</h2>
            </div>
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/html.png"}
                alt="html"
              />
              <div className="shadow"></div>

              <h2>HTML</h2>
            </div>
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/css3.png"}
                alt="css"
              />
              <div className="shadow"></div>

              <h2>CSS</h2>
            </div>
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/django.png"}
                alt="django"
              />
              <div className="shadow"></div>

              <h2>Django</h2>
            </div>

            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/python.png"}
                style={{ width: "60%" }}
                alt="python"
              />
              <div className="shadow"></div>
              <h2>Python</h2>
            </div>
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/illustrator.png"}
                alt="illustrator"
              />
              <div className="shadow"></div>

              <h2>Illustrator</h2>
            </div>
            <div className="skill">
              <img
                src={window.location.origin + "/assets/image/adobeXD.png"}
                alt="adobeXD"
              />
              <div className="shadow"></div>

              <h2>AdobeXD</h2>
            </div>
          </div>
        </div>

        <Helmet>
          <script
            defer
            src={window.location.origin + "/assets/js/index.js"}
          ></script>
        </Helmet>
      </div>
    </Transition>
  );
};

export default Skills;
