import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

const Login = () => {
  const history = useHistory();
  const goTo = () => history.push("/");
  return (
    <div>
      <Link to="/Registration">Registration</Link>

      <h1>Login</h1>
      <div>
        <button className="home" onClick={goTo}>
          Home
        </button>
      </div>
    </div>
  );
};
export default Login;
