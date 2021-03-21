import React, { Component } from "react";
import One from "./One";
import Two from "./Two";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showText: "",
    };
  }
  onChangeText(e) {
    this.setState({ text: e.target.value });
  }
  showText(text) {
    this.setState({ showText: this.state.text });
  }
  render() {
    return (
      <>
        <One
          input={
            <input
              type="text"
              value={this.state.text}
              onChange={(event) => this.onChangeText(event)}
            />
          }
          showText={<button onClick={() => this.showText()}>show</button>}
        />

        <Two state={this.state.showText} />
      </>
    );
  }
}

export default Parent;
