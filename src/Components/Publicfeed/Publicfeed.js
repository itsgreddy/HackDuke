import React from "react";
import "./Publicfeed.css";
import { Link } from "react-router-dom";

function Publicfeed() {
  return (
    <React.Fragment>
      <div>PUBLICFEED PAGE</div>{" "}
      <button>
        <Link to="/">HOME PAGE</Link>
      </button>
    </React.Fragment>
  );
}

export default Publicfeed;
