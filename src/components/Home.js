import React, { Component } from "react";
// import data from "./RenderList";

import "./home.css";

class Home extends Component {
  state = {
    list: [],
  };

  deleteRow = (id) => {
    // const delList = this.state.list;
    const filteredList = this.state.list.filter((row) => row.id !== id);
    // delList.splice(id, 1);
    this.setState({ list: filteredList });
  };

  //fetching data from an API
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ list: data });
      });
  }

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
                          onClick={() => this.deleteRow(data.id)}
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
