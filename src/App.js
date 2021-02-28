import React from "react";
import "./App.css";

//components
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Login />
    </>
  );
}

export default App;
