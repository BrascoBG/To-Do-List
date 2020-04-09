import React from "react";

function About() {
  return (
    <div>
      <h2 className="hello">
        Hello there! Thank you for checking my project!{" "}
      </h2>
      <div className="about-flex">
        <img className="me" src={require("../assets/me.jpg")} />
        <p className="info">
          This is my ToDo App version 2.0 built with React.js, React Router,
          Class Components, functional Components, State Componenets, Hooks,
          CSS3, etc...
        </p>
      </div>
    </div>
  );
}

export default About;
