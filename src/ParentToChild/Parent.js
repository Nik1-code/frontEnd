import React, { Component } from "react";
import One from "./One";
import Two from "./Two";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showText: false,
    };
  }
  onChangeText(e) {
    this.setState({ text: e.target.value });
  }
  showText(showText) {
    this.setState({ showText: true });
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
        />
        <One showText={<button onClick={() => this.showText()}>show</button>} />

        <Two state={this.state.showText} />
      </>
    );
  }
}

export default Parent;
