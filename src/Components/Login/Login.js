import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <React.Fragment>
      <div>LOGIN PAGE</div>
      <button>
        <Link to="/">HOME PAGE</Link>
      </button>
    </React.Fragment>
  );
}

export default Login;
