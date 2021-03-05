import React, { Component } from "react";
// import data from "./RenderList";

import "./home.css";

class Home extends Component {
  state = {
    list: [],
    checked: false,
    arrayOfCheckedRows: [],
  };

  //fetching data from an API
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ list: data });
      });
  }

  onChangeCheckbox = (e, checkedRowId) => {
    let updatedArray = [];
    if (e.target.checked) {
      updatedArray = [...this.state.arrayOfCheckedRows, checkedRowId];
    } else {
      updatedArray = this.state.arrayOfCheckedRows.filter(
        (id) => id !== checkedRowId
      );
    }

    this.setState({ arrayOfCheckedRows: updatedArray });
  };

  deleteRow = () => {
    const { arrayOfCheckedRows, list } = this.state; // "Destructuring". Please study this
    let newList = list;
    arrayOfCheckedRows.forEach((id) => {
      newList = newList.filter((item) => item.id !== id);
    });

    this.setState({ list: newList, arrayOfCheckedRows: [] });
  };

  render() {
    return (
      <div>
        <div className="App-header" id="home">
          <h1 className="App-text">This is Home Page!</h1>
          <h2>Data</h2>
          <button
            className="deleteBtn"
            onClick={(checked) => this.deleteRow(checked)}
          >
            Delete
          </button>
          <h4>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Check/uncheck </th>
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
                        <input
                          type="checkbox"
                          name="checkbox"
                          value={this.state.checked}
                          onChange={(e) => this.onChangeCheckbox(e, data.id)}
                        ></input>
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
