import React, { Component } from "react";
import data from "./RenderList";
import Card from "./Card";
import "./home.css";

function CardForData(data) {
  return (
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
    </tr>
  );
}

const Home = (props) => {
  return (
    <div>
      <div className="App-header" id="#">
        <h1 className="App-text">This is Home Page!</h1>
        <h2>Data</h2>
        <h4>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>{data.map(CardForData)}</tbody>
          </table>
        </h4>
      </div>
    </div>
  );
};

export default Home;
