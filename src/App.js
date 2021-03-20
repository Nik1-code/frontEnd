import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

//components
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Header from "./components/Header";
import Home from "./reactRouter/Home";
import Login from "./reactRouter/Login";
import Registration from "./reactRouter/Registration";
import Parent from "./ParentToChild/Parent";
import One from "./ParentToChild/One";
import Two from "./ParentToChild/Two";

function App() {
  return (
    <>
      <Parent />
    </>
    // <BrowserRouter>
    //   <>
    //     {/* <Header />
    //     <Home />
    //     <Login /> */}

    //     <Route path="/" exact component={Home} />
    //     <Route path="/Login" component={Login} />
    //     <Route path="/Registration" component={Registration} />
    //   </>
    // </BrowserRouter>
  );
}

export default App;
