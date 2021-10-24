import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <React.Fragment>
      <div>REGISTER PAGE</div>{" "}
      <button>
        <Link to="/">HOME PAGE</Link>
      </button>
    </React.Fragment>
  );
}

export default Register;
