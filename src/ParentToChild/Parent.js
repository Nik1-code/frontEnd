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
          input={this.state.text}
          onChange={(event) => this.onChangeText(event)}
          onClick={() => this.showText()}
        />
        <Two state={this.state.showText} />
      </>
    );
  }
}

export default Parent;
