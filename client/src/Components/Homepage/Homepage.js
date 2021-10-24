import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <React.Fragment>
      <div>HOME PAGE</div>
      <button>
        <Link to="/Login">LOGIN</Link>
      </button>
      <button>
        <Link to="/Register">REGISTER</Link>
      </button>
      <button>
        <Link to="/University">UNIVERSITY</Link>
      </button>
      <button>
        <Link to="/Form">FORM</Link>
      </button>
      <button>
        <Link to="/Publicfeed">PUBLICFEED</Link>
      </button>
    </React.Fragment>
  );
}

export default Homepage;
