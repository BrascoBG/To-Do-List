import React from "react";
import { useSpring, animated } from "react-spring";

function About() {
  const spring = useSpring({
    from: { marginTop: -1500 },
    to: { marginTop: 0 },
    delay: 1000,
    config: { duration: 200 },
  });
  const springFade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <div>
      <animated.div style={springFade}>
        <h2 className="hello">
          Hello there! Thank you for checking my project!
        </h2>
      </animated.div>

      <animated.div style={spring}>
        <div className="about-flex">
          <img className="me" src={require("../assets/me.jpg")} alt="its me" />
          <p className="info">
            This is my ToDo App version 2.2 built with React.js, React Router,
            Class Components, functional Components, State Componenets, Hooks,
            React-Spring, CSS3, etc...
          </p>
        </div>
      </animated.div>
    </div>
  );
}

export default About;
