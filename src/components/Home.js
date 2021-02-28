import React, { Component } from "react";
import data from "./RenderList";

import "./home.css";

class Home extends Component {
  state = {
    list: data,
  };

  render() {
    return (
      <div>
        <div className="App-header" id="home">
          <h1 className="App-text">This is Home Page!</h1>
          <h2>Data</h2>
          <h4>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>
                        <button
                          className="deleteBtn"
                          onClick={(id) => {
                            const delList = this.state.list;
                            delList.splice(id, 1);
                            this.setState({ list: delList });
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </h4>
        </div>
      </div>
    );
  }
}

export default Home;
