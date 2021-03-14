import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <button>
        <Link to="/Login">Login</Link>
      </button>
      <h1>Registration</h1>
    </div>
  );
};
export default Registration;
