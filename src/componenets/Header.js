import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Shopping List App</h1>
      <Link className="link" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="link" to="/about">
        About
      </Link>
    </header>
  );
}

export default Header;
