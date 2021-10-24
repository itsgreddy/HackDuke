import React from "react";
import "./University.css";
import { Link } from "react-router-dom";
function University() {
  return (
    <React.Fragment>
      <div>UNIVERSITY PAGE</div>{" "}
      <button>
        <Link to="/">HOME PAGE</Link>
      </button>
    </React.Fragment>
  );
}

export default University;
