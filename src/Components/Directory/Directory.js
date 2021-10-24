import React from "react";
import "./Directory.css";
import { Link } from "react-router-dom";

function Directory() {
  return (
    <React.Fragment>
      <div>DIRECTORY PAGE</div>{" "}
      <button>
        <Link to="/">HOME PAGE</Link>
      </button>
    </React.Fragment>
  );
}

export default Directory;
