import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/Login">Login</Link>
      </button>
      <button>
        <Link to="/Registration">Registration</Link>
      </button>

      <h1>Home</h1>
    </div>
  );
};

export default Home;
