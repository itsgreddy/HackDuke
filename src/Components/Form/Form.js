import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

function Form() {
  return (
    <React.Fragment>
      <div>FORM PAGE</div>{" "}
      <button>
        <Link to="/">HOME PAGE</Link>
      </button>
    </React.Fragment>
  );
}
export default Form;
