import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/Registration">Registration</Link>
      </button>
      <h1>Login</h1>
    </div>
  );
};
export default Login;
